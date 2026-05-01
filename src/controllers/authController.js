const service = require('../services/authService');

exports.register = async (req, res, next) => {
  try {
    const user = await service.register(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await service.login(email, password);
    res.json(result);
  } catch (err) {
    next(err);
  }
};