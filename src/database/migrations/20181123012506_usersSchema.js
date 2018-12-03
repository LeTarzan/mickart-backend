exports.up = function(knex) {
  return knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('users', table => {
          table.increments('id').primary()
          table.string('email').unique()
          table.string('password')
          table.string('name')
          table.timestamps(true, true)
          table.boolean('status').defaultTo(true)
          // table.timestamps('deleted_at').defaultTo(null)
        })
        .then(res => {
          console.log('criada a tabela de users ', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
