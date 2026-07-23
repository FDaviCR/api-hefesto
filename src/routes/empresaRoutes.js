const express = require('express');
const router = express.Router();
const controller = require('../controllers/empresaController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, controller.criar);
router.get('/', auth, controller.listar);
router.get('/:id', auth, controller.obter);
router.put('/:id', auth, controller.atualizar);
router.patch('/:id/inativar', auth, controller.inativar);

module.exports = router;
