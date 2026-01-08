const express = require('express');
const router = express.Router();
const prisma = require('../utils/prismaClient');
const { generateRoadmap: generateFromService } = require('../services/roadmapService');
const roadmapController = require('../controllers/roadmapController');

// GET /api/roadmap?userId=1  --> returns roadmap blocks using prisma/service
router.get('/', async (req, res) => {
  try {
    const userId = Number(req.query.userId);
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    const roadmap = await generateFromService(prisma, userId);
    res.json(roadmap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/roadmap  --> accepts a profile payload and returns a generated roadmap
// This mirrors the client-side `requestRoadmap` which posts a profile.
router.post('/', roadmapController.generateRoadmap);

module.exports = router;