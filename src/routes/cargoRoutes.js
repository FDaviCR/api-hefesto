const express = require('express');
const router = express.Router();
const { ROLES } = require('../config/roles');
const authMiddleware = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');

const cargoController = require('../controllers/cargoController');

router.get('/', cargoController.listar);
router.get('/:id', cargoController.buscarPorId);
router.post('/', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), cargoController.criar);
router.put('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), cargoController.atualizar);
router.delete('/:id', authMiddleware, authorize(ROLES.ADMIN, ROLES.GERENTE), cargoController.excluir);

module.exports = router;