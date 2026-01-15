let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole(){
    console.log('O botão foi clicado!')
}

function botaoAlerta(){
    alert('Eu amo JS!');
}

function botaoPrompt(){
    let cidadeBrasil = prompt('Digite o nome de uma cidade Brasileira');
    alert(`Eu estive em ${cidadeBrasil} e lembrei de você!`)
}

function botaoSoma(){
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let resultadoSoma = num1 + num2
    alert(`O resultado da soma entre o número ${num1} e o número ${num2} é ${resultadoSoma}`)
}