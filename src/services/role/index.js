/* eslint-disable prettier/prettier */

const knex = require('../../database')

const getAllRole = function () {
  return knex('role').whereNot('status', false)
}

const getRole = function (data) {
  return knex('role')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const insertRole = function (data) {
  return knex('role')
    .insert(data, 'id')
}

const updateRole = function (data) {
  console.log('data = ', data)
  return knex('role')
    .update(data)
    .where('id', data.id)
    .whereNot('status', false)
}

const deleteRole = function (data) {
  let datetime = new Date()
  return knex('role')
    .update({ status: false, deactivated_at: datetime })
    .where('id', data.id)
}

exports.getAllRole = getAllRole
exports.getRole = getRole
exports.insertRole = insertRole
exports.updateRole = updateRole
exports.deleteRole = deleteRole
