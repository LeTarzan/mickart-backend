/* eslint-disable prettier/prettier */

const knex = require('../../database')

const getAllPayment = function () {
  return knex('payments').whereNot('status', false)
}

const getPayment = function (data) {
  return knex('payments')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const insertPayment = function (data) {
  return knex('payments')
    .insert(data, 'id')
}

const updatePayment = function (data) {
  console.log('data = ', data)
  return knex('payments')
    .update(data)
    .where('id', data.id)
    .whereNot('status', false)
}

const deletePayment = function (data) {
  let datetime = new Date()
  return knex('payments')
    .update({ status: false, deactivated_at: datetime })
    .where('id', data.id)
}

exports.getAllPayment = getAllPayment
exports.getPayment = getPayment
exports.insertPayment = insertPayment
exports.updatePayment = updatePayment
exports.deletePayment = deletePayment