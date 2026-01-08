const express = require('express');
const router = express.Router();
const prisma = require('../utils/prismaClient');
const { generateRoadmap } = require('../services/roadmapService');

router.get('/', async (req, res) => {
  try {
    const userId = Number(req.query.userId);
    const roadmap = await generateRoadmap(prisma, userId);
    res.json(roadmap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
