/* eslint-disable prettier/prettier */
const knex = require('../../database')
const {
  insertList,
  insertPayment,
  updatePayment,
  updateList
} = require('../index')

const getAllSells = function () {
  return knex('sells').whereNot('status', false)
}

const getSell = function (data) {
  return knex.raw(`
        SELECT
            u.id,
            s.id as sell_id,
            s.user_id,
            s.amount,
            s.date_delivery,
            p.id as p_id,
            p.sell_id as p_sell_id,
            p.type_payment_id,
            pd.id as pd_id,
            pd.name_prod,
            pd.size_available,
            tp.id as tp_id,
            tp.type,
            l.id as l_id,
            l.qtd,
            l.amount as u_amount,
            l.product_id,
            l.sell_id as l_sell_id
        FROM sells as s
        LEFT JOIN users as u on u.id = s.user_id
        LEFT JOIN list as l on l.sell_id = s.id
        LEFT JOIN payments as p on p.sell_id = s.id
        LEFT JOIN type_payment as tp on tp.id = p.type_payment_id
        LEFT JOIN products as pd on pd.id = l.product_id
        WHERE u.status <> false and u.id = ${data.id}
    `).then(result => result.rows)
}

const insert = async data => knex('sells').insert(data, 'id')

const insertSell = async function (dados) {
  let result = {}

  console.log('dados = ', dados)
  let rsSellId = await insert(dados.sell)
  rsSellId = rsSellId[0]

  // atribuindo id da venda a lista
  dados.list.map(item => (item.sell_id = rsSellId))

  console.log('dadosList ', dados.list)
  let resultList = await insertList(dados.list)
  dados.payment.sell_id = rsSellId

  let resultPayment = await insertPayment(dados.payment)
  console.log('resultado..', resultPayment)

  result.result_list = resultList
  result.result_payment = resultPayment

  return result
}

const update = data => {
  knex('sells')
    .update(data)
    .where('id', data.id)
    .whereNot('status', false)
}

const updateSell = async function (dados) {
  let result = {}

  let resultSell = await update(dados.sell)
  console.log('updateList', updateList)
  let resultList = await updateList(dados.list)
  let resultPayment = await updatePayment(dados.payment)

  result.resultSell = resultSell
  result.resultList = resultList
  result.resultPayment = resultPayment

  return result
}

const deleteSell = function (data) {
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
// add sz in product
