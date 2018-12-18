exports.up = function(knex) {
  return knex.schema.hasTable('list').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('list', table => {
          table.increments('id').primary()
          table.integer('qtd')
          table.string('amount')
          table.timestamps(true, true)
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela list', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
