const firstName = window.prompt("Digite seu Primeiro Nome");
const lastName = prompt("Digite seu Sobrenome");
const classRoom = prompt("Digite sua área de estudo");
const yearOfBirth = prompt("Digite o seu ano de nascimento");

alert(
  "Nome completo: " +
    firstName +
    " " +
    lastName +
    "\nÁrea de Estudo: " +
    classRoom +
    "\nIdade: " +
    (2022 - yearOfBirth)
);
