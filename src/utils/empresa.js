const Empresa = require('../models/Empresa');
const httpError = require('./httpError');

exports.garantirEmpresaAtiva = async (id) => {
  const empresa = await Empresa.findByPk(id);
  if (!empresa || !empresa.ativo) {
    throw httpError(400, 'Empresa não encontrada ou inativa');
  }
  return empresa;
};
