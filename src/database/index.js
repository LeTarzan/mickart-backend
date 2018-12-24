const Knex = require('knex')
const databaseConfig = require('./knexfile.js')

const knex = Knex(databaseConfig)

knex.migrate.latest().then(() => {
  knex('users').then(result => {
    console.log('result ', result.length)
    !result.length && knex.seed.run()
  })
})

module.exports = knex
