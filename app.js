const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030; // Puedes cambiar el puerto según tus necesidades

// Configura Express para servir archivos estáticos desde un directorio llamado "public"
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta que maneja todas las demás rutas de Angular
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Inicia el servidor en el puerto especificado
app.listen(PORT,"0.0.0.0", () => {
  console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});