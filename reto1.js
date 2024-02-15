// Definimos una función llamada sumPares que toma un número como parámetro
const sumPares = (numero) => {
  // Inicializamos una variable suma para almacenar el resultado de la suma de los números pares
  let suma = 0;

  // Iteramos desde 0 hasta el número dado como parámetro
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= numero; i++) {
    // Verificamos si el número actual es par usando el operador módulo (%)
    if (i % 2 === 0) {
      // Si el número es par, lo sumamos a la variable suma
      suma += i;
    }
  }

  // Devolvemos la suma total de los números pares
  return suma;
};

// Definimos una constante num con el valor 10
const num = 10;

// Llamamos a la función sumPares pasando el valor de la constante num como argumento
const res = sumPares(num);

// Imprimimos el resultado en la consola
console.log('La suma de todos los números pares desde 0 hasta', num, 'es:', res);
