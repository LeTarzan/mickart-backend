/* eslint-disable prettier/prettier */
exports.up = function (knex, Promise) {
    return knex.schema.hasTable('sells').then(exists => {
        if (exists) {
            return knex.schema
                .alterTable('sells', table => {
                    table.string('status')
                })
                .then(res => {
                    console.log('alterada a tabela sells', res)
                })
                .catch(console.error)
        }
    })

};

exports.down = function (knex, Promise) {

};
