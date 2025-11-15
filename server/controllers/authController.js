const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const fallbackUsers = [];

function issueToken(user) {
  return jwt.sign({ id: user._id || user.id, email: user.email }, process.env.JWT_SECRET || 'dev_secret', {
    expiresIn: '7d',
  });
}

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = issueToken(user);
    return res.status(201).json({ token, user });
  } catch (error) {
    const fallbackUser = {
      id: `fallback-${Date.now()}`,
      name,
      email,
      password: await bcrypt.hash(password, 5),
      gradeLevel: 11,
    };
    fallbackUsers.push(fallbackUser);
    const token = issueToken(fallbackUser);
    return res.status(201).json({ token, user: fallbackUser });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.json({ token: issueToken(user), user });
    }
  } catch (error) {
    // Fall back to in-memory store
  }

  const fallbackUser = fallbackUsers.find((u) => u.email === email);
  if (!fallbackUser) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, fallbackUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.json({ token: issueToken(fallbackUser), user: fallbackUser });
};
