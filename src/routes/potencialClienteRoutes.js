const express = require('express');
const router = express.Router();

const potencialClienteController = require('../controllers/potencialClienteController');

router.get('/', potencialClienteController.listar);
router.get('/:id', potencialClienteController.buscarPorId);
router.post('/', potencialClienteController.criar);
router.put('/:id', potencialClienteController.atualizar);
router.delete('/:id', potencialClienteController.excluir);

module.exports = router;
