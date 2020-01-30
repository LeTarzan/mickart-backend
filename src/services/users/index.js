  const knex = require('../../database')

const { insertAddress, updateAddress } = require('../address')
const { encryptPassword, comparePassword } = require('../password')

const getUser = function(data) {
  console.log('data = ', data)
  return knex('users')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const getUserByEmail = function(data) {
  console.log('data = ', data)
  return knex.raw(`
    SELECT
     u.id,
     u.name,
     u.lastname,
     u.email
    FROM users as u
    WHERE u.email = '${data.email}'
  `).then(result => result.rows)
}

const getUserByUsername = function(data) {
  console.log('data = ', data)
  return knex.raw(`
  SELECT
    u.id,
    u.username,
    u.password,
    u.email,
    u.name,
    u.role_id,
    r.type,
    r.id as rid
    FROM users u
    INNER JOIN role as r ON u.role_id = r.id
    WHERE u.username = '${data.username}'
  `).then(result => result.rows[0])
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
  u.password,
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
  WHERE u.id = ${data.id} AND u.status = true`).then(result => result.rows)
}

const insert = function (data){
  if (!data.username){
    data.username = data.email.split('@')[0]
  }
  return knex('users').insert({ ...data }, 'id')
}

const insertUser = async function(data) {
  console.log('data = ', data)
  try {
    if (!data.user.password) {
      data.user.password = await encryptPassword('123qwe123')
    }
    let userId = await insert(data.user)
    await insertAddress({ ...data.address, user_id: userId[0] })
    return true
  } catch (error) {
    console.log('error insertUser...', error)
    throw error
  }
}

const update = function(data){
  console.log('data 2', data)
  return knex('users')
    .update( data )
    .where('id', data.id)
}

const verifyPassword = async function(data){
  try {
    const dataUser = await getUserProfile(data)
    if(!comparePassword(data.currentPassword, dataUser[0].password)){
      return false
    }
    const newPasswordCrypt = encryptPassword(data.newPassword)
    return newPasswordCrypt
  } catch (error) {
    console.log('error verifyPassword', error)
    throw error
  }
}

const updateUser = async function(data) {
  try {
    let password
    if(data.password.newPassword){
      password = await verifyPassword(data.password)
      if(!password){
        return 'Senha atual inválida'
      }
      data.user.password = password
    }
    await update(data.user)
    await updateAddress(data.address)
    return true
  } catch (error) {
    console.log('error..', error)
    throw error
  }
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

const updateUserPassword = function(data){
  return knex('users')
    .update( data )
    .where('id', data.id)
}

exports.getAllUsers = getAllUsers
exports.getUser = getUser
exports.insertUser = insertUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser
exports.getUserProfile = getUserProfile
exports.getUserByUsername = getUserByUsername
exports.getUserByEmail = getUserByEmail
exports.updateUserPassword = updateUserPassword
