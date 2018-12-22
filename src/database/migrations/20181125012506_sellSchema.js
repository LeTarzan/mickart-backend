exports.up = function(knex) {
  return knex.schema.hasTable('sells').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('sells', table => {
          table.increments('id').primary()
          table.decimal('amount')
          table.datetime('date_delivery')
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
