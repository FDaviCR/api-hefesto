const service = require('../services/autenticacaoService');
const { randomUUID } = require('crypto');

exports.registrar = async (req, res, next) => {
  try {
    const user = await service.registrar({ ...req.body, sys_id: randomUUID() });
    res.json(user);
  } catch (err) {
    next(
      {
        "message": "Erro ao registrar usuário: " + err.message
      }
    );
  }
};

exports.login = async (req, res, next) => {
  try {
    const { usuario, senha } = req.body;
    const result = await service.login(usuario, senha);
    res.json(result);
  } catch (err) {
    next(
      {
        "message": "Erro ao fazer login: " + err.message
      }
    );
  }
};