/* eslint-disable prettier/prettier */
const knex = require('../../database')

const getAllProducts = function () {
  return knex('products').whereNot('status', false)
}

const getProduct = function (data) {
  console.log('data = ', data)
  return knex('products')
    .select()
    .where('id', data.id)
    .whereNot('status', false)
}

const insertProduct = function (data) {
  console.log('data = ', data)
  try {
    let result = knex('products').insert(data, 'id')
    console.log('resultado..', result)
    if (result) {
      return { msg: 'Inserido com sucesso!', data: true }
    }
  } catch (error) {
    console.log('Error..', error)
    throw error
  }
}

const updateProduct = function (data) {
  console.log('data = ', data)
  knex('products')
    .update(data)
    .where('id', data.id)
}

const deleteProduct = function (data) {
  console.log('data = ', data)
  let datetime = new Date()
  knex('products')
    .update({ status: false, deactivated_at: datetime })
    .where('id', data.id)
}

exports.getAllProducts = getAllProducts
exports.getProduct = getProduct
exports.insertProduct = insertProduct
exports.updateProduct = updateProduct
exports.deleteProduct = deleteProduct
