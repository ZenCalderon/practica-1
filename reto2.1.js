function calcularAreaTriangulo(base, altura) {
  // El área de un triángulo se calcula como (base * altura) / 2
  const area = (base * altura) / 2;
  return area;
}

const base = 10;
const altura = 20;
const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
