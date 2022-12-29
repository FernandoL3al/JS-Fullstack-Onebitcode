const x = prompt("Digite um número");
const y = prompt("Digite outro número");

const soma = parseFloat(x) + parseFloat(y);
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados:" +
    "\nSoma = " +
    soma +
    "\nSubtração = " +
    subtracao +
    "\nMultiplicação = " +
    multiplicacao +
    "\nDivisão = " +
    divisao
);
