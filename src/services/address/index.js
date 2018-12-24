const knex = require('../../database')

const getAllAddress = function () {
  return knex('address').whereNot('status', false)
}

const getAddress = function (data) {
  return knex('address')
    .select()
    .where('user_id', data.id)
    .whereNot('status', false)
}

const insertAddress = function (data) {
  return knex('address').insert(data, 'id')
}

const updateAddress = function (data) {
  return knex('address')
    .update(data)
    .where('user_id', data.id)
    .whereNot('status', false)
}

const deleteAddress = function (data) {
  let datetime = new Date()
  return knex('address')
    .update({ status: false, deactivated_at: datetime })
    .where('user_id', data.id)
    .whereNot('status', false)
}

exports.getAddress = getAddress
exports.getAllAddress = getAllAddress
exports.insertAddress = insertAddress
exports.updateAddress = updateAddress
exports.deleteAddress = deleteAddress
