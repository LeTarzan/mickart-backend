/* eslint-disable prettier/prettier */

const knex = require('../../database')

const getAllList = function(){
    return knex('list').whereNot('status', false)
}

const getList = function(data){
    return knex('list')
      .select()
      .where('id', data.id)
      .whereNot('status', false)
}

const insertList = function(data){
    return knex('list')
      .insert(data)
}

const updateList = function(data){
    return knex('list')
      .update(data)
      .where('sell_id', data.id)
      .whereNot('status', false)
}

const deleteList = function(data){
    let datetime = new Date()
    return knex('list')
      .update({status : false, deactivated_at: datetime})
      .where('id', data.id)
}

exports.getAllList = getAllList
exports.getList = getList
exports.insertList = insertList
exports.updateList = updateList
exports.deleteList = deleteList