const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.json({ status: 'Mentora API up', timestamp: new Date().toISOString() });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/roadmap', require('./routes/roadmapRoutes'));
app.use('/api/pathaway', require('./routes/pathawayRoutes'));
app.use('/api/pods', require('./routes/podRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mentora server running on ${PORT}`));
