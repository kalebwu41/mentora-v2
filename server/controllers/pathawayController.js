const PathawayRecord = require('../models/PathawayRecord');
const evaluatePathaway = require('../utils/pathawayEvaluator');

exports.recordResult = async (req, res) => {
  const payload = req.body;
  const summary = payload.summary || evaluatePathaway(payload.decisions || []);

  try {
    await PathawayRecord.create({
      userId: req.user?.id,
      pathwayId: payload.pathwayId,
      summary,
    });
  } catch (error) {
    // fallback
  }

  res.json({ status: 'stored', summary });
};
