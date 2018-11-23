import Knex from 'knex'
import databaseConfig from './knexfile.js'

const knex = Knex(databaseConfig)

knex.migrate.latest()

export default knex
