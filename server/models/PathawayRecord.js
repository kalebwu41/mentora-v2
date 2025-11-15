const mongoose = require('mongoose');

const pathawayRecordSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    pathwayId: String,
    summary: Object,
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.PathawayRecord || mongoose.model('PathawayRecord', pathawayRecordSchema);
