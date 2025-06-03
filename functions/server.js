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

// Handle all other routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Export the serverless handler
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // Add a small delay to ensure the function is properly initialized
  await new Promise(resolve => setTimeout(resolve, 100));
  return handler(event, context);
}; 