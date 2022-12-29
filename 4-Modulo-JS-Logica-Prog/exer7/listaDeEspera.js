let pessoas = ["Matheus", "Marcos"]
let option;

do {
  option = prompt("Lista de Pacientes do consultório\n"+pessoas + "\n\n1. Novo paciente\n2. Consultar paciente\n3. Sair")
  if (option == 1) {
    pessoas.push(prompt("Digite o nome do novo paciente"))
  }
  else if (option == 2) {
    alert(pessoas.shift()+" Será consultado agora")
  }
} while (option != 3)

// estrutura fila