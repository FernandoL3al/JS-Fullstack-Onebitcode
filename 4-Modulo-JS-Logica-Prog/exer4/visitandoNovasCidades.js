const turista = prompt("Qual o seu nome?");
let cidades = "";
let cidade;
let quantidade = 0;
let visitou = "sim";

while (visitou !== "não") {
  visitou = prompt("Visitou alguma cidade? (sim/não)");
  if (visitou === "não") {
    break;
  }
  cidade = prompt("Digite o nome da cidade que você visitou");
  cidades += cidade + "\n";
  quantidade++;
}

alert(
  turista + " visitou: " + quantidade + " cidades.\n\nSão elas:\n\n" + cidades
);

var