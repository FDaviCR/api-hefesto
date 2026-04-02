const express = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post('/register', UserController.register);
routes.post('/login', UserController.login);

routes.put('/user', auth, UserController.update);
routes.delete('/user', auth, UserController.delete);

module.exports = routes;
