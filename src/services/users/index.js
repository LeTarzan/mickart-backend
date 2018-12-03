import knex from '../../database'

export function getAllUsers() {
  return knex('users')
}

export function insertUser(data) {
  console.log('data = ', data)
  return knex('users').insert({ ...data })
}
