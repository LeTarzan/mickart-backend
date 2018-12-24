exports.up = function(knex) {
  return knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('users', table => {
          table.increments('id').primary()
          table.string('email').unique().notNullable()
          table.string('password').notNullable()
          table.string('name').notNullable()
          table.string('lastname').notNullable()
          table.string('username').unique().notNullable()
          table.string('comment')
          table.integer('role_id').references('role.id').notNullable().defaultTo(1)
          table.timestamps(true, true)
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela de users ', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function(knex) {}
