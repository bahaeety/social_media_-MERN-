require("dotenv").config();
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');

const connectionString = process.env.CONNECTION_STRING;

const connection = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((e) => {
  console.error('Error connecting to MongoDB:', e);
  process.exit(1);
});

const sessionStore = mongoStore.create({
  mongoUrl: connectionString,
  collectionName: 'sessions', 
});

module.exports = { connection, sessionStore };
