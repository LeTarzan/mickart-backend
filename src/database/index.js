const Knex = require('knex')
const databaseConfig = require('./knexfile.js')

const knex = Knex(databaseConfig)

// knexx('users').then(resu => console.log('users', resu))
console.log('knexx')
knex.migrate.latest().then(() => {
  knex('users').then(result => {
    console.log('result ', result)
    if (!result.length) {
      knex.seed.run()
    }
  })
})

module.exports = knex
