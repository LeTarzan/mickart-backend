/* eslint-disable prettier/prettier */
const knex = require('../../database')

const getAllTypeOfPayment = function() {
  return knex('typePayment').whereNot('status', false)
}

const getTypeOfPayment = function(data) {
  return knex('typePayment')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const insertTypeOfPayment = function(data) {
  return knex('typePayment')
    .insert(data)
}

const updateTypeOfPayment = function(data){
    return knex('typePayment')
      .update(data)
      .where('id', data.id)
      .whereNot('status', false)
}

const deleteTypeOfPayment = function(data){
    let datetime = new Date()
    return knex('typePayment')
      .update({status : false, deactivated_at: datetime})
      .where('id', data.id)
}

exports.getAllTypeOfPayment = getAllTypeOfPayment
exports.getTypeOfPayment = getTypeOfPayment
exports.insertTypeOfPayment = insertTypeOfPayment
exports.updateTypeOfPayment = updateTypeOfPayment
exports.deleteTypeOfPayment = deleteTypeOfPayment