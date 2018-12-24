/* eslint-disable prettier/prettier */

exports.up = function (knex, Promise) {
  return knex.schema.hasTable('sells').then(exists => {
    if (exists) {
      return knex.schema
        .alterTable('sells', table => {
          table.integer('user_id').references('users.id')
          table.boolean('status').defaultTo(true)
          table.date('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela sells', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function (knex, Promise) {

}
