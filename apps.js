/*crea json de numeros*/ */
const express = require('express');

const app = express();
const port = 3001;

// Función para generar un array
const generateEvenNumbers = (n) => {
  const evenNumbers = [];
  for (let i = 0; i <= n; i += 2) {
    evenNumbers.push(i);
  }
  return evenNumbers;
};

// Definir el endpoint
app.get('/math/allEven/:number', (req, res) => {
  // Obtener el número de la ruta
  const number = parseInt(req.params.number, 10);

  // Generar el array de números
  const evenNumbers = generateEvenNumbers(number);

  // Construir el objeto JSON de respuesta
  const response = {
    even: evenNumbers,
  };

  // Enviar la respuesta como JSON
  res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
