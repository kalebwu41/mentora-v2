const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { chat } = require('../controllers/chatController');

const router = express.Router();

router.post('/', authMiddleware, chat);

module.exports = router;
