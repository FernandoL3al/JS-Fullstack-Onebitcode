const car1 = prompt("Digite o nome do veículo");
const velCar1 = prompt("Digite a velocidade do veículo");
const car2 = prompt("Digite o nome do veículo");
const velCar2 = prompt("Digite a velocidade do veículo");

if (velCar1 > velCar2) {
  alert(car1 + " é o mais veloz.");
} else if (velCar1 < velCar2) {
  alert(car2 + " é o mais veloz.");
} else {
  alert("as velocidades são iguais!");
}
