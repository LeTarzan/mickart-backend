exports.up = function(knex) {
  return knex.schema.hasTable('typePayment').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('typePayment', table => {
          table.increments('id').primary()
          table.string('type')
          table.timestamps(true, true)
        })
        .then(res => {
          console.log('criada a tabela typePayment', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
