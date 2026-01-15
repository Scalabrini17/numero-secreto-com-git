//Evolução do codigo
let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
  let chute = document.querySelector('input').value;//o .value é o que diferencia, eu não quero mostrar um valor mas quero pegar esse valor então usao esse comando .value
  console.log(chute);
}
function gerarNumeroAleatorio() {
  return parseInt(Math.random() *10 + 1);
}