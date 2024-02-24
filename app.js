/*json falso o verdadero*/ */
const express = require('express');

const app = express();
const port = 3000;

// Definir el endpoint
app.get('/math/isEven/:number', (req, res) => {
  // Obtener el número de la ruta
  // eslint-disable-next-line radix
  const number = parseInt(req.params.number);

  // Verificar si el número es par o impar
  const isEven = number % 2 === 0;

  // Construir el objeto JSON de respuesta
  const response = {
    even: isEven,
  };

  // Enviar la respuesta como JSON
  res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
