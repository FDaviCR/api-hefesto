const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, logController.criar);

router.get('/', auth, logController.listar);

module.exports = router;