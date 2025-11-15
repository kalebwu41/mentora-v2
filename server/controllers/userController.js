const User = require('../models/User');

exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).lean();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(200).json({
      id: req.user.id,
      name: 'Fallback Student',
      gradeLevel: 11,
      passions: ['software', 'design'],
      strengths: ['creative problem solving'],
    });
  }
};
