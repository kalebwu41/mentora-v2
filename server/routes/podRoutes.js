const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { listFeed, publishMessage } = require('../controllers/podController');

const router = express.Router();

router.get('/feed', listFeed);
router.post('/message', authMiddleware, publishMessage);

module.exports = router;
