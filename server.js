const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('common'));
app.use(express.static('public'));

// API Route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

// Export Express app sebagai handler untuk Serverless Functions
module.exports = app;
