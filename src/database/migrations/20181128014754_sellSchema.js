exports.up = function(knex) {
  return knex.schema.hasTable('sells').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('sells', table => {
          table.increments('id').primary()
          table.integer('list_id').references('list.id')
          table.integer('payments_id').references('payments.id')
          table.integer('user_id').references('users.id')
          table.string('amount')
          table.timestamps(true, true)
        })
        .then(res => {
          console.log('criada a tabela sells', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
