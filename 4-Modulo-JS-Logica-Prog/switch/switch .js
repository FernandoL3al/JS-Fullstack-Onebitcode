const alternativa = prompt("Escolha uma das alternativas:\n\na)\nb)\nc)");

switch (alternativa) {
  case "a":
    alert("Escolheu o a");
    break;
  case "b":
    alert("Escolheu o b");
    break;
  case "c":
    alert("Escolheu o c");
    break;
  default:
    alert("Não escolheu");
}
