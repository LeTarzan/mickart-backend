import Knex from 'knex'
import databaseConfig from './knexfile.js'

const knex = Knex(databaseConfig)

knex('users').then(resu => console.log('users', resu))

knex.migrate.latest()

export default knex
