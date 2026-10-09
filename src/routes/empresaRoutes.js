const express = require('express');
const router = express.Router();
const controller = require('../controllers/empresaController');
const auth = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');

router.post('/', auth, authorize(ROLES.ADMIN, ROLES.GERENTE), controller.criar);
router.get('/', auth, authorize(ROLES.ADMIN, ROLES.GERENTE), controller.listar);
router.get('/:id', auth, controller.obter);
router.put('/:id', auth, authorize(ROLES.ADMIN, ROLES.GERENTE), controller.atualizar);
router.patch('/:id/inativar', auth, authorize(ROLES.ADMIN, ROLES.GERENTE), controller.inativar);

module.exports = router;
