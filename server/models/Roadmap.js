const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    profileSnapshot: Object,
    plan: Object,
  },
  { timestamps: true },
);

module.exports = mongoose.models.Roadmap || mongoose.model('Roadmap', roadmapSchema);
