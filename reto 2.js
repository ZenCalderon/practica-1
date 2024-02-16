// eslint-disable-next-line no-unused-vars
const estoEsPrimo = (num) => {
  // Si el número es 1 o menor, no es primo
  if (num <= 1) {
    return false;
  }

  // Verificamos si el número es divisible por cualquier número entre 2 y la mitad de su valor
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      // Si el número es divisible, no es primo
      return false;
    }
  }

  // Si no se encontraron divisores, entonces es primo
  return true;
};

const num = 5;
if (estoEsPrimo(num)) {
  console.log(`${num} es primo`);
} else {
  console.log(`${num} no es primo`);
}
