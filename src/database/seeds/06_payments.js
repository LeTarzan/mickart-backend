exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('payments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('payments').insert([
        { sell_id: 1, type_payment_id: 1 },
        { sell_id: 2, type_payment_id: 2 },
        { sell_id: 3, type_payment_id: 3 },
        { sell_id: 4, type_payment_id: 2 },
        { sell_id: 5, type_payment_id: 1 }
      ]).then(() => knex.raw("select setval('payments_id_seq', (select max(id) from payments));"))
    })
}
