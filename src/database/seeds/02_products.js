exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name_prod: 'Protetor 1', qtd_stored: 2, color: 'Azul', value: 25.99, size_available: 1.30 },
        { id: 2, name_prod: 'Almofada', qtd_stored: 3, color: 'Vermelho', value: 29.99, size_available: 2.0 },
        { id: 3, name_prod: 'Protetor 2', qtd_stored: 1, color: 'Amarelo', value: 39.99, size_available: 3.0 },
        { id: 4, name_prod: 'Protetor 3', qtd_stored: 9, color: 'Rosa', value: 59.99, size_available: 3.50 },
        { id: 5, name_prod: 'Protetor 4', qtd_stored: 4, color: 'Verde', value: 99.99, size_available: 4.0 }
      ])
    })
}
