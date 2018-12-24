const knex = require('../../database')

const { insertAddress } = require('../address')

const getUser = function(data) {
  console.log('data = ', data)
  return knex('users')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const getUserProfile = function(data) {
  console.log('data = ', data)
  return knex.raw(`
  SELECT
  u.id,
  u.email,
  u.name,
  u.lastname,
  u.username,
  u.comment,
  u.role_id,
  a.id as a_id,
  a.address,
  a.city,
  a.district,
  a.number,
  a.zipcode,
  a.complement,
  a.user_id as a_user_id,
  r.type,
  r.id as r_id
  FROM users as u
  LEFT JOIN address as a ON u.id = a.user_id
  LEFT JOIN role as r ON r.id = u.role_id
  WHERE u.id = ${data.id} AND u.status <> false`)
}

const insert = function (data){
  console.log('goiaba', data)
  return knex('users').insert({ ...data }, 'id')
}

const insertUser = async function(data) {
  console.log('data = ', data)
  try {
    await insert(data.user)
    await insertAddress(data.adress)
    return true
  } catch (error) {
    console.log('error insertUser...', error)
    throw error
  }
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
exports.getUserProfile = getUserProfile
