const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');
const auth = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');
const { ROLES } = require('../config/roles');

router.get('/', auth, authorize(ROLES.ADMIN), logController.listar);

module.exports = router;