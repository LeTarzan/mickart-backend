exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      const password = '123qwe123'
      return knex('users').insert([
        { email: 'jorge@gmail.com', password, name: 'jorge' },
        { email: 'cleiton@gmail.com', password, name: 'cleiton' },
        { email: 'jailson@gmail.com', password, name: 'jailson' },
        { email: 'rafael@gmail.com', password, name: 'rafael' },
        { email: 'nilson@gmail.com', password, name: 'nilson' }
      ])
    })
}
