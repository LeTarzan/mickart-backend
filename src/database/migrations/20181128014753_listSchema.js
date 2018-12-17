exports.up = function(knex) {
  return knex.schema.hasTable('list').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('list', table => {
          table.increments('id').primary()
          table.integer('product_id').references('products.id')
          table.integer('qtd')
          table.string('amount')
          table.timestamps(true, true)
        })
        .then(res => {
          console.log('criada a tabela list', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
