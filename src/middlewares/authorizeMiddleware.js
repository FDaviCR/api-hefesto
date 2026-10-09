const { ROLES } = require('../config/roles');

const negar = (res, message) =>
  res.status(403).json({
    "success": false,
    "data": null,
    "message": message,
    "error": true
  });

// Uso: router.post('/', auth, authorize('admin', 'manager'), controller.criar)
module.exports = (...rolesPermitidas) => (req, res, next) => {
  const user = req.user;

  if (!user || !rolesPermitidas.includes(user.role)) {
    return negar(res, 'Sem permissão para esta ação');
  }

  // Quem não é admin só opera dentro de uma empresa; sem vínculo, não opera.
  if (user.role !== ROLES.ADMIN && !user.empresa) {
    return negar(res, 'Usuário sem empresa vinculada');
  }

  next();
};
