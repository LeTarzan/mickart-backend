exports.up = function(knex) {
  return knex.schema.hasTable('sells').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('sells', table => {
          table.increments('id').primary()
          table
            .foreign('id')
            .references('id')
            .inTable('list')
          table
            .foreign('id')
            .references('id')
            .inTable('payments')
          table
            .foreign('id')
            .references('id')
            .inTable('users')
          table.string('amount')
          table.timestamps(true, true)
        })
        .then(res => {
          console.log('criada a tabela sells ', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
