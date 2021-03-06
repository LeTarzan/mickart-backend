exports.up = function(knex) {
  return knex.schema.hasTable('products').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('products', table => {
          table.increments('id').primary()
          table.string('name')
          table.integer('qtd_stored')
          table.decimal('value')
          table.decimal('size_available')
          table.timestamps(true, true)
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela products', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
