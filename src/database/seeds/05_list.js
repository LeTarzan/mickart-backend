exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('list').insert([
        { qtd: 1, amount: 99.99, product_id: 5, sell_id: 1 },
        { qtd: 1, amount: 59.99, product_id: 4, sell_id: 2 },
        { qtd: 1, amount: 39.99, product_id: 3, sell_id: 3 },
        { qtd: 1, amount: 29.99, product_id: 2, sell_id: 4 },
        { qtd: 1, amount: 25.99, product_id: 1, sell_id: 5 }
      ])
    })
}