// Objeto JSON que representa información sobre una persona
const persona = {
  nombre: 'Kevin',
  edad: 22,
  ciudad: 'Ciudad de México',
  genero: 'Hombre',
};

// Función para imprimir las propiedades de una persona
// eslint-disable-next-line no-shadow
const imprimirInfoPersona = (persona) => {
  console.log('Nombre:', persona.nombre);
  console.log('Edad:', persona.edad);
  console.log('Ciudad:', persona.ciuda);
  console.log('Genero', persona.genero);
};

// Llamando a la función
imprimirInfoPersona(persona);
