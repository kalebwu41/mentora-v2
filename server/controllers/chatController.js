const aiEngine = require('../utils/aiEngine');

exports.chat = async (req, res) => {
  const { message, context } = req.body;
  const reply = aiEngine.respond(message, context);
  res.json({ reply });
};
