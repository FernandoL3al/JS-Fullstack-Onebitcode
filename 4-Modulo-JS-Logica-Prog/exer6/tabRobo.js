let num = prompt("Digite um número de 1 a 20");
let respostas = "";

for(let i = 1 ; i <= 20; i++){
  respostas += num +" * "+ i +" = "+num*i +"\n";
}

alert(respostas);
