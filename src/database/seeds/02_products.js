exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'Protetor 1', qtd_stored: 2, value: 25.99, size_available: 1.30 },
        { id: 2, name: 'Almofada', qtd_stored: 3, value: 29.99, size_available: 2.0 },
        { id: 3, name: 'Protetor 2', qtd_stored: 1, value: 39.99, size_available: 3.0 },
        { id: 4, name: 'Protetor 3', qtd_stored: 9, value: 59.99, size_available: 3.50 },
        { id: 5, name: 'Protetor 4', qtd_stored: 4, value: 99.99, size_available: 4.0 }
      ]).then(() => knex.raw("select setval('products_id_seq', (select max(id) from products));"))
    })
}
