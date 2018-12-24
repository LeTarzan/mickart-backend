
exports.up = function (knex, Promise) {
  return knex.schema.hasTable('address').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('address', table => {
          table.increments('id').primary()
          table.string('address')
          table.string('city')
          table.string('district')
          table.integer('number')
          table.integer('zipcode')
          table.string('complement')
          table.integer('user_id').references('users.id')
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela de address ', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function (knex, Promise) {

}
