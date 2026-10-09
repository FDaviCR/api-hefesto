const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');

router.get('/', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), funcionarioController.listar);
router.get('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), funcionarioController.obterPorId);
router.post('/', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), funcionarioController.criar);
router.put('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), funcionarioController.atualizar);
router.delete('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), funcionarioController.deletar);

module.exports = router;
