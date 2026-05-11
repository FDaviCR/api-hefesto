const UserModel = require('../models/Usuario');

exports.atualizarUsuario = async (id, data) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');

  await user.update(data);
  return {
    "success": true,
    "data": {user},
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