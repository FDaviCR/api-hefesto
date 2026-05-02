const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwt');

exports.register = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hash });

  return {
    "success": true,
    "data": { id: user.id, name: user.name, email: user.email },
    "message": "Usuário registrado com sucesso",
    "error": null
  };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuário não encontrado');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Senha inválida');

  const token = generateToken({ id: user.id });
  return {
    "success": true,
    "data": { token },
    "message": "Login realizado com sucesso",
    "error": null
  };
};