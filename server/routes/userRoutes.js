const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { me } = require('../controllers/userController');

const router = express.Router();

router.get('/me', authMiddleware, me);

module.exports = router;
