const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const auth = require('../middlewares/authMiddleware');

router.get('/', logController.listar);

module.exports = router;