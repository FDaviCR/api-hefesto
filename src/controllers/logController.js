const LogService = require('../services/logService');

exports.criar = async (req, res, next) => {
  try {
    const result = await LogService.criarLog(req.body);
    return res.json(result);
  } catch (error) {
    console.error('Erro ao criar log:', error);
    next(
      {
        "message": "Erro ao criar log: " + error.message
      }
    );
  }
};

exports.listar = async (req, res, next) => {
  try {
    const result = await LogService.buscarLogs(req.query);
    return res.json(result);
  } catch (error) {
    next(
      {
        "message": "Erro ao consultar logs: " + error.message
      }
    );
  }
};