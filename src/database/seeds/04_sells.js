exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sells')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('sells').insert([
        { id: 1, amount: 99.99, date_delivery: '2018-12-26', user_id: 1 },
        { id: 2, amount: 59.99, date_delivery: '2018-12-26', user_id: 2 },
        { id: 3, amount: 39.99, date_delivery: '2018-12-26', user_id: 3 },
        { id: 4, amount: 29.99, date_delivery: '2018-12-26', user_id: 4 },
        { id: 5, amount: 25.99, date_delivery: '2018-12-26', user_id: 5 }
      ]).then(() => knex.raw("select setval('sells_id_seq', (select max(id) from sells));"))
    })
}
