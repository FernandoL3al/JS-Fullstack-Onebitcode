const person1 = prompt("Digite o nome do personagem 1");
const atkPerson1 = prompt("Digite o poder de ataque do personagem 1");
const person2 = prompt("Digite o nome do personagem 2");
let lifePerson2 = prompt(
  "Digite a quantidade de pontos de vida do personagem 2"
);
const defPerson2 = prompt("Digite o poder de defesa do personagem 2");
const person2Escudo = prompt("O personagem 2 possui escudo? (sim/não)");
let danoCausado = 0;

if (atkPerson1 > defPerson2) {
  danoCausado =
    person2Escudo === "sim"
      ? (atkPerson1 - defPerson2) / 2
      : atkPerson1 - defPerson2;
  lifePerson2 -= danoCausado;
}

alert(person1 + " causou " + danoCausado + " pontos de dano em " + person2);
alert(
  person1 +
    "\nPoder de ataque: " +
    atkPerson1 +
    "\n\n" +
    person2 +
    "\nPontos de vida: " +
    lifePerson2 +
    "\nPoder de defesa: " +
    defPerson2 +
    "\nPosui escudo: " +
    person2Escudo
);
