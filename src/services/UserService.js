const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

module.exports = {
  async create(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    return User.create({
      ...user,
      password: hashedPassword
    });
  },

  async update(id, data) {
    return User.update(id, data);
  },

  async delete(id) {
    return User.delete(id);
  }
};
