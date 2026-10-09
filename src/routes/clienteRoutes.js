const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');


router.get('/', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), clienteController.listar);
router.get('/:id', authMiddleware, clienteController.obterPorId);
router.post('/', clienteController.criar);
router.put('/:id', authMiddleware, authMiddleware, clienteController.atualizar);
router.delete('/:id', authMiddleware, authMiddleware, clienteController.deletar);

module.exports = router;
