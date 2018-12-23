/* eslint-disable prettier/prettier */
const knex = require('../../database')

const getAllSells = function(){
    return knex('sells').whereNot('status', false)
}

const getSell = function(data){
    return knex.raw(`
        SELECT
            u.id,
            s.id
            as
            sell_id,
            s.user_id,
            s.amount,
            s.date_delivery,
            p.id as p_id,
            p.sell_id as p_sell_id,
            p.type_payment_id,
            pd.id as pd_id,
            pd.name_prod,
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

const insertSell = function(data){
    return knex('sells')
    .insert(data,'id')
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
// add sz in product