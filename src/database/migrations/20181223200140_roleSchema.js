
exports.up = function (knex, Promise) {
  return knex.schema.hasTable('role').then(exists => {
    if (!exists) {
      return knex.schema
        .createTable('role', table => {
          table.increments('id').primary()
          table.string('type')
          table.boolean('status').defaultTo(true)
          table.datetime('deactivated_at')
        })
        .then(res => {
          console.log('criada a tabela de role ', res)
        })
        .catch(console.error)
    }
  })
}

exports.down = function (knex, Promise) {

}
