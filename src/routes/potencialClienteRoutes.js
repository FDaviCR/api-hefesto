const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');

const potencialClienteController = require('../controllers/potencialClienteController');

router.get('/', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), potencialClienteController.listar);
router.get('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE, ROLES.CORRETOR), potencialClienteController.buscarPorId);
router.post('/', potencialClienteController.criar);
router.put('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), potencialClienteController.atualizar);
router.delete('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), potencialClienteController.excluir);

module.exports = router;
