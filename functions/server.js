const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: '¡Hola Mundo!' });
});

// Handle API requests
app.get('/api/*', (req, res) => {
  res.json({ message: '¡Hola Mundo desde la API!' });
});

module.exports.handler = serverless(app); 