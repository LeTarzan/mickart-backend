const knex = require('../../database')

const getUser = function(data) {
  console.log('data = ', data)
  return knex('users')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const insertUser = function(data) {
  console.log('data = ', data)
  return knex('users').insert({ ...data }, 'id')
}

const updateUser = function(data) {
  console.log('data = ', data)
  return knex('users')
    .update({ data })
    .where('id', data.id)
}

const deleteUser = function(data) {
  console.log('data = ', data)
  let datetime = new Date()
  return knex('users')
    .update({ status: false, deactivated_at: datetime })
    .where('id', data.id)
}

const getAllUsers = function() {
  return knex('users').whereNot('status', false)
}

exports.getAllUsers = getAllUsers
exports.getUser = getUser
exports.insertUser = insertUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser
