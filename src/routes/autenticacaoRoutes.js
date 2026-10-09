const express = require('express');
const router = express.Router();
const controller = require('../controllers/autenticacaoController');
const auth = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');

router.post('/registrar-cliente', controller.registrar);
router.post('/registrar-admin',auth, controller.registrar);
router.post('/registrar', auth, authorize(ROLES.ADMIN, ROLES.GERENTE), controller.registrar);

router.post('/login', controller.login);

module.exports = router;