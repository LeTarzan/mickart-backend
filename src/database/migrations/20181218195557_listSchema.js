/* eslint-disable prettier/prettier */

exports.up = function(knex, Promise) {
    return knex.schema.hasTable('list').then(exists => {
        if (exists) {
          return knex.schema
            .alterTable('list', table => {
              table.integer('product_id').references('products.id')
              table.integer('sell_id').references('sells.id')
            })
            .then(res => {
              console.log('criada a tabela list', res)
            })
            .catch(console.error)
        }
      })
};

exports.down = function(knex, Promise) {
  
};
