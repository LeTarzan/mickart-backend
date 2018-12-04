/* eslint-disable prettier/prettier */
import knex from '../../database'

export function getAllProducts() {
  return knex('products').whereNot('status', false)
}

export function getProduct(data){
    console.log('data = ', data)
    return knex('products')
      .select()
      .where('id', data.id)
      .whereNot('status', false)
}

export function insertProduct(data){
    console.log('data = ', data)
    return knex('products')
      .insert({ data })
}

export function updateProduct(data){
    console.log('data = ', data)
    knex('products')
      .update(data)
      .where('id', data.id)
}

export function deleteProduct(data){
    console.log('data = ', data)
    let datetime = new Date()
    knex('products')
      .update({ status: false, deactivated: datetime })
      .where('id', data.id)
}