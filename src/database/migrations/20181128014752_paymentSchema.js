exports.up = function(knex) {
  return knex.schema.hasTable('payments').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('payments', table => {
          table.increments('id').primary()
          table.integer('payment_type_id').references('payments.id')
          table.timestamps(true, true)
        })
        .then(res => {
          console.log('criada a tabela payments', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
