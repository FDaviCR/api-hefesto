const LogService = require('../services/logService');

exports.criar = async (req, res) => {
  try {
    const result = await LogService.criarLog(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: '',
      error: error.message
    });
  }
};

exports.listar = async (req, res) => {
  try {
    const result = await LogService.buscarLogs(req.query);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: '',
      error: error.message
    });
  }
};