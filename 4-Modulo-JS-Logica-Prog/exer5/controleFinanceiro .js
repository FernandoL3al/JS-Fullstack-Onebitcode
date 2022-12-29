let inicial = prompt("Digite a qunatia inicial de dinheiro");
inicial = parseFloat(inicial);
let option;

do {
    option = prompt("Saldo atual: R$" + inicial + "\na) Adicionar quantia;\nb) Remover quantia;\nc) Sair.");
    switch (option) {
        case "a":
            inicial += parseFloat(prompt("Digite a quantia"));
            break;
        case "b":
            inicial -= prompt("Digite a quantia");
            break;
        case "c":
            alert("Encerrando o programa!");
    }
} while (option !== "c");