/* eslint-disable prettier/prettier */

exports.up = function (knex, Promise) {
    return knex.schema.hasTable('typePayment').then(exists => {
        if (exists) {
            return knex.schema
                .alterTable('typePayment', table => {
                    table.boolean('status').defaultTo(true)
                    table.datetime('deactivated_at')
                })
                .then(res => {
                    console.log('criada a tabela typePayment', res)
                })
                .catch(console.error)
        }
    })
};

exports.down = function (knex, Promise) {

};
