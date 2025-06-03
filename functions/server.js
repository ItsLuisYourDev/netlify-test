const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: '¡Hola Mundo!' });
});

// API endpoint
app.get('/api', (req, res) => {
  res.json({ message: '¡Hola Mundo desde la API!' });
});

// Export the serverless handler
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // Map the paths correctly
  if (event.path === '/.netlify/functions/server') {
    event.path = '/';
  } else if (event.path === '/.netlify/functions/server/api') {
    event.path = '/api';
  }
  return handler(event, context);
}; 