exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('list').insert([
        { qtd: 1, note: '', amount: 99.99, color: 'Azul', product_id: 5, sell_id: 1 },
        { qtd: 1, note: '', amount: 59.99, color: 'Vermelho', product_id: 4, sell_id: 2 },
        { qtd: 1, note: '', amount: 39.99, color: 'Amarelo', product_id: 3, sell_id: 3 },
        { qtd: 1, note: '', amount: 29.99, color: 'Rosa', product_id: 2, sell_id: 4 },
        { qtd: 1, note: '', amount: 25.99, color: 'Verde', product_id: 1, sell_id: 5 }
      ]).then(() => knex.raw("select setval('list_id_seq', (select max(id) from list));"))
    })
}
