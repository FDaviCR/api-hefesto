const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', funcionarioController.listar);
router.get('/:id', funcionarioController.obterPorId);
router.post('/', funcionarioController.criar);
router.put('/:id', funcionarioController.atualizar);
router.delete('/:id', funcionarioController.deletar);

module.exports = router;
