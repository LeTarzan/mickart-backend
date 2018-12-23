/* eslint-disable prettier/prettier */

exports.up = function(knex, Promise) {
    return knex.schema.hasTable('payments').then(exists => {
        if (exists) {
          return knex.schema
            .alterTable('payments', table => {
                table.boolean('status').defaultTo(true)
                table.datetime('deactivated_at')
            })
            .then(res => {
              console.log('alterada a tabela payment', res)
            })
            .catch(console.error)
        }
      })
};

exports.down = function(knex, Promise) {
  
};
