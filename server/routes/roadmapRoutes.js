const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { generateRoadmap } = require('../controllers/roadmapController');

const router = express.Router();

router.post('/', authMiddleware, generateRoadmap);

module.exports = router;
