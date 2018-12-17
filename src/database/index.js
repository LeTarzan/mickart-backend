const Knex = require('knex')
const databaseConfig = require('./knexfile.js')

const knexx = Knex(databaseConfig)

knexx('users').then(resu => console.log('users', resu))

knexx.migrate.latest()

module.exports = knexx
