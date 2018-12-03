import knex from '../../database'

export function getAllUsers() {
  return knex('users').whereNot('status', false)
}

export function getUser(data) {
  console.log('data = ', data)
  return knex('users')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

export function insertUser(data) {
  console.log('data = ', data)
  return knex('users').insert({ ...data })
}

export function updateUser(data) {
  console.log('data = ', data)
  return knex('users')
    .update(data)
    .where('id', data.id)
    .whereNot('status', false)
}

export function deleteUser(data){
  console.log('data = ', data)
  return knex('users')
    .update({status: false})
    .where('id', data.id)
}