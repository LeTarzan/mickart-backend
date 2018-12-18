exports.up = function(knex) {
  return knex.schema.hasTable('sells').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('sells', table => {
          table.increments('id').primary()
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
