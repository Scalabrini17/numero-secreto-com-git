let titulo = document.querySelector('h1');

titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute(){
    console.log('O botão foi clicado!')
}
//Aqui começamos criando uma variavel (let) logo depois atribuimos o valor document.querySelector, esse valor permitirá que dentro do javascript nós mudemos no domumento HTML nesse caso estamos mudando o h1 que é o título principal do nosso seite

//O sentido do innerHTML é para que nós possamos intrduzir o que queremos, aqui por exemplo eu peguei a variavel titulo coloquei o .innerHTML para falar que quero atribuir um valor a variavel titulo e vou colocar o valor na frente dessa forma: linha 4

// function significa função, quando falamos dela pensamos em uma linha ou um codigo que vai fazer uma função ou executar uma função dentro da variavel ou nesse caso do botão que está no nosso site o botão (chute)
//Para o uso da função o padão é sempre: function [nome](){aqui vai colocar a responsabilidade da função que é só uma}

/*NA AULA DOIS FIZ UMA EVOLUÇÃO DO CURSO
(QUERO DEIXAR AQUI UMA PARTE DO COMEÇO ANTES DE EVOLUIR
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//Essa parte de cima não é errada, porém temos as boas praticas de um programador e vamos fazer agora nas linhas de baixo 
//No caso o que iremos fazer é só ter boas práticas e ao em vez de escrever toda vez esse codigo iremos simplificar e deixar mais limpo*/