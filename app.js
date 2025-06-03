// Importar express
const express = require('express');
const app = express();

// Definir puerto
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
