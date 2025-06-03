const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: '¡Hola Mundo!' });
});

module.exports.handler = serverless(app); 