exports.up = function(knex) {
  return knex.schema.hasTable('payments').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('payments', table => {
          table.increments('id').primary()
          table.integer('sell_id').references('sells.id')
          table.integer('type_payment_id').references('type_payment.id')
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
