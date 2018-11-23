import knex from '../../database'

export function getAllUsers() {
  return knex('users')
}
