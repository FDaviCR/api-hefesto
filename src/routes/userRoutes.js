const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.put('/:id', auth, controller.update);
router.patch('/:id/inactivate', auth, controller.inactivate);

module.exports = router;
