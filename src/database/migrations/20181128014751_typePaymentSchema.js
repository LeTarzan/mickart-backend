exports.up = function(knex) {
  return knex.schema.hasTable('type_payment').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('type_payment', table => {
          table.increments('id').primary()
          table.string('type')
          table.timestamps(true, true)
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela typePayment', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
