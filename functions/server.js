const express = require('express');
const serverless = require('serverless-http');
const axios = require('axios');

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

// Ejemplo de endpoint usando axios
app.get('/api/example', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.json({
      message: 'Datos obtenidos con axios',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener datos',
      message: error.message
    });
  }
});

// Handle all other routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Export the serverless handler
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  // Remove the /.netlify/functions/server prefix from the path
  if (event.path.startsWith('/.netlify/functions/server')) {
    event.path = event.path.replace('/.netlify/functions/server', '') || '/';
  }
  return handler(event, context);
}; 