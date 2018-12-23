exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type_payment')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('type_payment').insert([
        { type: 'Boleto' },
        { type: 'Parcelado' },
        { type: 'À vista' }
      ])
    })
}
