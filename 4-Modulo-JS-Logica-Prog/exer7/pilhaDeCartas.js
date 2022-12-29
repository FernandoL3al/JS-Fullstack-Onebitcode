const cartas = ["Ás de Espadas", "Oito de Copas"]
let option;

do {
    option = prompt("Cartas no baralho:\n"+ cartas+"\n\n1.Adicionar carta\n2.Puxar carta\n3.Sair")
    if (option == 1) {
        cartas.push(prompt("Digite o nome da carta"))
    } else if(option == 2){
        alert(cartas.pop())
    }
} while (option != 3) 


// estrutura pilha