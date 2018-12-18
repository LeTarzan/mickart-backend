/* eslint-disable prettier/prettier */
const knex = require('../../database')

const getAllSells = function(){
    return knex('sells').whereNot('status', false)
}

const getSell = function(data){
    return knex('sells')
      .select()
      .where('id', data.id)
      .whereNot('status', false)
}

const insertSell = function(data){
    return knex('sells')
      .insert(data)
}

const updateSell = function(data){
    return knex('sells')
      .update(data)
      .where('id', data.id)
      .whereNot('status', false)
}

const deleteSell = function(data){
    let datetime = new Date()
    return knex('sells')
      .update({ status: false, deactivated_at: datetime })
      .where('id', data.id)
}

exports.getAllSells = getAllSells
exports.getSell = getSell
exports.insertSell = insertSell
exports.updateSell = updateSell
exports.deleteSell = deleteSell