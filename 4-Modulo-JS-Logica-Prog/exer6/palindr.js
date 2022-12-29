let palavra = prompt("Digite uma palavra");
let palindromo = "";

for(let i = palavra.length-1; i >= 0; i--){
    palindromo += palavra[i]; 
}

// Exercitei o operdaor Ternário (expressao)? (acao true):(acao false)
palavra === palindromo? alert(palavra+" é um palíndromo!!!") : alert("Não é um palíndromo!!!\n"+palavra+"\n"+palindromo);