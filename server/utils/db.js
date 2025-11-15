const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    console.warn('No Mongo URI provided, skipping DB connection.');
    return;
  }

  try {
    await mongoose.connect(uri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Mongo connection failed, continuing with in-memory fallback.', error.message);
  }
}

module.exports = connectDB;
