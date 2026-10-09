const ROLES = Object.freeze({
  ADMIN: 'admin',
  GERENTE: 'gerente',
  FUNCIONARIO: 'funcionario',
  CLIENTE: 'cliente',
  CORRETOR: 'corretor'
});

module.exports = {
  ROLES,
  LISTA_ROLES: Object.values(ROLES)
};
