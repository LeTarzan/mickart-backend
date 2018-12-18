exports.up = function(knex) {
  return knex.schema.hasTable('payments').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('payments', table => {
          table.increments('id').primary()
          table.integer('sell_id').references('sells.id')
          table.integer('typePayment_id').references('typePayment.id')
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
