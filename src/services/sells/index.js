/* eslint-disable prettier/prettier */
const knex = require('../../database')
const {
  insertList,
  updateList
} = require('../list')
const {
  insertPayment,
  updatePayment
} = require('../payment')

const getNextDateDeliveries = function (data) {
  return knex.raw(`
  SELECT
    u.id,
    u.name,
    u.lastname,
    s.id as s_id,
    s.user_id,
    s.date_delivery
  FROM users u
    INNER JOIN sells s ON u.id = s.user_id
    WHERE u.status = true
    ORDER BY date_delivery DESC LIMIT 10`).then(result => result.rows)
}

const getAllSells = function () {
  return knex.raw(`
  SELECT
    u.id,
    u.name,
    s.id as sell_id,
    s.amount,
    s.date_delivery,
    s.user_id
  FROM users u
    INNER JOIN sells s ON s.user_id = u.id
  WHERE u.status = true
  `)
}

const getSell = function (data) {
  let query = `
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
        pd.name,
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
    WHERE u.status = true and u.id = ${data.id}
  `
  if (data.sellId) {
    query = `${query} AND WHERE s.id = ${data.sellId}`
  }
  query = `${query};`

  return knex.raw(query).then(result => result.rows)
}

const insert = async data => knex('sells').insert(data, 'id')

const insertSell = async (dados) => {
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

const update = async data => {
  return knex('sells')
    .update(data)
    .where('id', data.id)
    .whereNot('status', false)
}

const updateSell = async function (dados) {
  let result = {}

  let resultSell = await update(dados.sell)
  let resultList = await dados.list.map(async item => updateList(item))
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
exports.getNextDateDeliveries = getNextDateDeliveries
