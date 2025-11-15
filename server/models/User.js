const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    gradeLevel: Number,
    passions: [String],
    strengths: [String],
    savedRoadmap: Object,
    pods: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
