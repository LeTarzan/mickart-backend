exports.up = function(knex) {
  return knex.schema.hasTable('payments').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('payments', table => {
          table.increments('id').primary()
          table
            .foreign('id')
            .references('id')
            .inTable('typePayment')
        })
        .then(res => {
          console.log('criada a tabela payments', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
