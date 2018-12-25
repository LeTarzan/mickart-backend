
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        { type: 'Administrador' },
        { type: 'Usuario' }
      ]).then(() => knex.raw("select setval('role_id_seq', (select max(id) from role));"))
    })
}
