const UserService = require('../services/UserService');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/jwt');

module.exports = {

  async register(req, res) {
    const user = await User.findByEmail(req.body.email);

    if (user) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    await UserService.create(req.body);

    return res.json({ message: 'Usuário criado' });
  },

  async login(req, res) {
    const user = await User.findByEmail(req.body.email);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    });

    return res.json({ user, token });
  },

  async update(req, res) {
    await UserService.update(req.userId, req.body);
    return res.json({ message: 'Atualizado' });
  },

  async delete(req, res) {
    await UserService.delete(req.userId);
    return res.json({ message: 'Usuário inativado' });
  }
};
