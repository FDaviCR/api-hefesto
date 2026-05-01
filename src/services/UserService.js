const UserModel = require('../models/User');

exports.updateUser = async (id, data) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');

  await user.update(data);
  return user;
};

exports.inactivateUser = async (id) => {
  const user = await UserModel.findByPk(id);
  if (!user) throw new Error('Usuário não encontrado');

  await user.update({ active: false });
  return { message: 'Usuário inativado' };
};