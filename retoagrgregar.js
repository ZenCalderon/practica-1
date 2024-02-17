// eslint-disable-next-line linebreak-style
// agregar propiedades
// Crear un objeto JSON vacío
const objetoVacio = {};

// Función para agregar una nueva propiedad y su valor al objeto
const agregarPropiedad = (objeto, propiedad, valor) => {
  // eslint-disable-next-line no-param-reassign
  objeto[propiedad] = valor;
};

// Llamar a la función para agregar una nueva propiedad al objeto vacío
agregarPropiedad(objetoVacio, 'nombre', 'jose');

// Imprimir el objeto actualizado en la terminal
console.log(objetoVacio);
