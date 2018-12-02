import knex from '../../database'

export function getAllUsers() {
  return knex('users')
}

export function insertUser(req) {
  return knex('users')
    .insert(
      { email: req.body.email },
      { password: req.body.password },
      { name: req.body.name }
    )
    .then(_ => {
      req.send(true)
    })
}
