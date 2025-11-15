const PodMessage = require('../models/PodMessage');

const seedFeed = [
  {
    podId: 'software',
    userName: 'Ria | SWE Fellow',
    content: 'Recovery brief draft ready for critique—need eyes on resilience plan.',
    tags: ['Incident'],
  },
];

exports.listFeed = async (req, res) => {
  try {
    const feed = await PodMessage.find().sort({ createdAt: -1 }).limit(20).lean();
    if (!feed.length) {
      return res.json(seedFeed);
    }
    return res.json(feed);
  } catch (error) {
    return res.json(seedFeed);
  }
};

exports.publishMessage = async (req, res) => {
  const { podId, content, tags = [] } = req.body;
  try {
    const message = await PodMessage.create({
      podId,
      content,
      tags,
      userName: req.user?.name || 'Student',
    });
    return res.status(201).json(message);
  } catch (error) {
    const fallback = { podId, content, tags, userName: 'Student', createdAt: new Date() };
    seedFeed.unshift(fallback);
    return res.status(201).json(fallback);
  }
};
