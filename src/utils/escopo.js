const { ROLES } = require('../config/roles');

// admin enxerga tudo; os demais, apenas a própria empresa
exports.filtroEmpresa = (solicitante) =>
  solicitante.role === ROLES.ADMIN ? {} : { empresa: solicitante.empresa };

exports.mesmaEmpresa = (registro, solicitante) =>
  solicitante.role === ROLES.ADMIN || registro.empresa === solicitante.empresa;

// Remove campos controlados pelo sistema e, para não-admin, força a empresa do solicitante
exports.dadosEscopados = (dados, solicitante) => {
  const { id, sys_id, createdAt, updatedAt, ...resto } = dados || {};
  if (solicitante.role !== ROLES.ADMIN) resto.empresa = solicitante.empresa;
  return resto;
};
