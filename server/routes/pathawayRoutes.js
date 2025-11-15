const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { recordResult } = require('../controllers/pathawayController');

const router = express.Router();

router.post('/result', authMiddleware, recordResult);

module.exports = router;
