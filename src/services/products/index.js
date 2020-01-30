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
    knex('products').insert(data, 'id').then(result => {
      console.log('resultado..', result[0])
      if (result[0]) {
        return { msg: 'Inserido com sucesso!', data: true }
      }
      throw Error('Erro ao inserir')
    })
  } catch (error) {
    console.log('Error..', error)
    return error
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
