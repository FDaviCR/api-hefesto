const service = require('../services/userService');

exports.update = async (req, res, next) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    next(
      {
        "message": "Erro ao atualizar usuário: " + err.message
      }
    );
  }
};

exports.inactivate = async (req, res, next) => {
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