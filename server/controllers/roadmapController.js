const Roadmap = require('../models/Roadmap');
const generateRoadmap = require('../utils/roadmapGenerator');

exports.generateRoadmap = async (req, res) => {
  const profile = req.body;
  const plan = generateRoadmap(profile);

  try {
    await Roadmap.create({ userId: req.user?.id, profileSnapshot: profile, plan });
  } catch (error) {
    // fallback storage
  }

  res.json(plan);
};
