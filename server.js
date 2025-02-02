const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const env = process.env.NODE_ENV || 'development';

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.static('public'));

// Gunakan "module.exports" untuk Vercel (tanpa app.listen)
module.exports = app;
