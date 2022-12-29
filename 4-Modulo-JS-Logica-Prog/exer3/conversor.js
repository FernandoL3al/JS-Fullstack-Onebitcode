const metros = prompt("Digite a medida em metros:");
const opcao = prompt(
  "Digite a opcao desejada:\na) milímetro(mm)\nb) centímetro(cm)\nc) decímetro(dm)\nd) decâmetro(dam)\ne) hectômetro(hm)\nf) quilômetro(km)"
);

switch (opcao) {
  case "a":
    alert(metros + " metros, equivale a " + metros * 1000 + " milimetros");
    break;
  case "b":
    alert(metros + " metros, equivale a " + metros * 100 + " centímetros");
    break;
  case "c":
    alert(metros + " metros, equivale a " + metros * 10 + " decímetros");
    break;
  case "d":
    alert(metros + " metros, equivale a " + metros / 10 + " decâmetros");
    break;
  case "e":
    alert(metros + " metros, equivale a " + metros / 100 + " hectômetros");
    break;
  case "f":
    alert(metros + " metros, equivale a " + metros / 1000 + " quilômetros");
    break;
  default:
    alert("OPÇÃO INVÁLIDA!!!");
}
