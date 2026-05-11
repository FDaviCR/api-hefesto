const service = require('../services/Service');

exports.atualizar = async (req, res, next) => {
  try {
    const usuario = await service.updateUser(req.params.id, req.body);
    res.json(usuario);
  } catch (err) {
    next(
      {
        "message": "Erro ao atualizar usuário: " + err.message
      }
    );
  }
};

exports.inativar = async (req, res, next) => {
  try {
    const result = await service.inactivateUser(req.params.id);
    res.json(result);
  } catch (err) {
    next(
      {
        "message": "Erro ao inativar usuário: " + err.message
      }
    );
  }
};