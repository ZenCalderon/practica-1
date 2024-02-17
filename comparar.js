// Definir dos objetos JSON que representan información sobre productos
// eslint-disable-next-line no-unused-vars
const product1 = {
  nombre: 'Camisa',
  precio: '30 pesos',
  cantidad: 5,
};

// eslint-disable-next-line no-unused-vars
const product2 = {
  nombre: 'Pantalón',
  precio: '50 pesos',
  cantidad: 3,
};

// Función para comparar dos productos y determinar si son iguales
// eslint-disable-next-line no-shadow
const compararProductos = (product1, product2) => {
  // Verificar si todas las propiedades son iguales
  if (
    // eslint-disable-next-line no-self-compare
    product1.nombre === product2.nombre
    // eslint-disable-next-line no-self-compare
    && product1.precio === product2.precio
    && product1.cantidad === product2.cantidad
  ) {
    return true; // Si son iguales, devolver true
  }
  return false; // Si son diferentes, devolver false
};

// Llamar a la función y mostrar el resultado en la consola
console.log(compararProductos(product1, product2)); // Output: false
