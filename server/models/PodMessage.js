const mongoose = require('mongoose');

const podMessageSchema = new mongoose.Schema(
  {
    podId: String,
    userName: String,
    content: String,
    tags: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.models.PodMessage || mongoose.model('PodMessage', podMessageSchema);
