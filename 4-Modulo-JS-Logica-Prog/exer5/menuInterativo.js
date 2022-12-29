let option

do {
    option = prompt("Esolha uma das opções:\na) Criar;\nb) Editar;\nc) Salvar;\nd) Excluir;\ne) Encerrar.");
    switch(option){
        case "a":
            alert("Você escolheu Criar");
            break;
        case "b":
            alert("Você escolheu Editar");
            break;
        case "c":
            alert("Você escolheu Salvar");
            break;
        case "d":
            alert("Você escolheu Excluir");
            break;
        case "e":
            alert("Você escolheu Encerrar");
            alert("O sistema será encerrado!")
            break;
    }
}while(option !== "e");