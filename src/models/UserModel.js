const db = require('../config/database');

module.exports = {
  create: (data) => db('users').insert(data),

  findByEmail: (email) => db('users').where({ email }).first(),

  findById: (id) => db('users').where({ id }).first(),

  update: (id, data) => db('users').where({ id }).update(data),

  delete: (id) => db('users').where({ id }).update({ active: false })
};
