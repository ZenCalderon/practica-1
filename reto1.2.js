const contarVocales = (unaCadena) => {
  // eslint-disable-next-line max-len
  // Convertimos la cadena a minúsculas para hacer la comparación de manera insensible a mayúsculas/minúsculas
  // eslint-disable-next-line no-param-reassign, no-unused-vars
  unaCadena = unaCadena.toLowerCase();

  let contador = 0;
  // Iteramos sobre cada carácter de la cadena
  // eslint-disable-next-line no-undef, no-plusplus
  for (let i = 0; i < unaCadena.length; i++) {
    // Verificamos si el carácter actual es una vocal
    // eslint-disable-next-line no-undef
    if (unaCadena[i] === 'a' || unaCadena[i] === 'e' || unaCadena[i] === 'i' || unaCadena[i] === 'o' || unaCadena[i] === 'u') {
      // eslint-disable-next-line no-plusplus
      contador++;
    }
  }
  return contador;
};

const texto = 'Hola koders';
const numeroVocales = contarVocales(texto);
console.log('El número de vocales en la cadena es:', numeroVocales);
