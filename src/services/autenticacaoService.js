const User = require('../models/Usuario');
const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwt');

exports.registrar = async (data) => {
  const hash = await bcrypt.hash(data.senha, 10);
  const user = await User.create({ ...data, senha: hash });

  return {
    "success": true,
    "data": { id: user.id, name: user.nome, email: user.email },
    "message": "Usuário registrado com sucesso",
    "error": null
  };
};

exports.login = async (usuario, senha) => {
  const user = await User.findOne({ where: { usuario } });
  if (!user) throw new Error('Usuário não encontrado');

  const valid = await bcrypt.compare(senha, user.senha);
  if (!valid) throw new Error('Senha inválida');

  const token = generateToken({ id: user.id });
  return {
    "success": true,
    "data": { token },
    "message": "Login realizado com sucesso",
    "error": null
  };
};