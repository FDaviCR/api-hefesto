const service = require('../services/autenticacaoService');

exports.registrar = async (req, res, next) => {
  try {
    const user = await service.registrar(req.body);
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
    const { email, password } = req.body;
    const result = await service.login(email, password);
    res.json(result);
  } catch (err) {
    next(
      {
        "message": "Erro ao fazer login: " + err.message
      }
    );
  }
};