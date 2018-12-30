const { encryptPassword } = require('../../services/password')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(async function() {
      // Inserts seed entries
      const password = await encryptPassword('123qwe123')
      return knex('users').insert([
        { email: 'jorge@gmail.com', password, name: 'Jorge', lastname: 'Da Silva', username: 'jorginda12', comment: '' },
        { email: 'cleiton@gmail.com', password, name: 'Cleiton', lastname: 'Cardoso', username: 'cleitinho', comment: '' },
        { email: 'jailson@gmail.com', password, name: 'Jailson', lastname: 'Mendes', username: 'ursopeludo', comment: '' },
        { email: 'rafael@gmail.com', password, name: 'Rafael', lastname: 'Sanches', username: 'fucazu', comment: '' },
        { email: 'nilson@gmail.com', password, name: 'Nilson', lastname: 'Da Silva', username: 'aeroportodemosquito', comment: '' }
      ]).then(() => knex.raw("select setval('users_id_seq', (select max(id) from users));"))
    })
}
