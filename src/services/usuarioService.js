const UserModel = require('../models/Usuario');
const bcrypt = require('bcrypt');

exports.atualizarUsuario = async (id, data) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');

  if (data.senha) {
    data.senha = await bcrypt.hash(data.senha, 10);
  }

  await user.update(data);
  return {
    "success": true,
    "data": { id: user.id, usuario: user.usuario },
    "message": "",
    "error": null
  };
};

exports.inativarUsuario = async (id) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');

  await user.update({ ativo: false });
  return {
    "success": true,
    "data": {},
    "message": "Usuário inativado",
    "error": null
  };
};