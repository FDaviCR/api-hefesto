const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');
const auth = require('../middlewares/authMiddleware');

router.put('/:id', auth, controller.atualizar);
router.patch('/:id/inativar', auth, controller.inativar);

module.exports = router;
