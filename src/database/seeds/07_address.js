
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        { address: 'Rua Azulão', city: 'Cotia', district: 'Jardim Nova Coimbra', number: 693, zipcode: 6703420, complement: '', user_id: 1 },
        { address: 'Rua Goiaba', city: 'Itapevi', district: 'Jardim Bahia', number: 234, zipcode: 12345123, complement: '', user_id: 2 },
        { address: 'Rua Das Dores', city: 'Barueri', district: 'Centro', number: 23, zipcode: 12334123, complement: '', user_id: 3 },
        { address: 'Rua Cabeça', city: 'São Paulo', district: 'Vila Leopoldina', number: 6754, zipcode: 12323123, complement: '', user_id: 4 },
        { address: 'Rua Lampada', city: 'Osasco', district: 'Pq. Industrial', number: 43434, zipcode: 12312123, complement: '', user_id: 5 }
      ])
    })
}
