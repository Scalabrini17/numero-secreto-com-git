//Desafio 1 (sem ajuda)
function calculoIMC(altura, peso) {
    let imc = peso / (altura ** 2);
    return imc.toFixed(2); //.toFixed(2) retorna o valor com 2 casas decimais 
}
let altura = 1.80;
let peso = 80;
console.log(calculoIMC(altura, peso));

//Desafio 2 (com ajuda)
function calculoFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let fatorial = 1; //Pesquisar mais sobre o for, ainda um pouco de dúvidas!
    for(let i = 2; i <= num; i++){
        fatorial *= i;
    }
    return fatorial;
}
let num = 5
let resultado = calculoFatorial(num);
console.log(`O fatorial de ${num} é ${resultado}`)

//Desafio 3 (minha versão, sem ajuda)
function conversaoDinheiro(real) {
    let converte = real / cotadolar;
    return converte.toFixed(2);
}
let real = 100;
let cotadolar = 4.80; 
console.log(conversaoDinheiro(real));
// Desafio 3 (versão do profesor)
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

//Desafio 4 (com ajuda nos calculos [ps: preciso melhorar em matemática])
function areaPerimetro(largura, altura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
console.log(`A área da sala é de ${area} metros quedrados`);
console.log(`O perímetro da sala é de ${perimetro} metros`);
}
let largura = 5;
let altura = 3;
console.log(areaPerimetro(largura, altura));

//Desafio 5
function calculoSalaCircular(raio, pi) {
    let perimetro = 2 * pi * raio;
    let area = pi * raio * raio;
    
    console.log(`O perímetro da sala é de ${perimetro.toFixed(2)} metros`);
    console.log(`A área da sala é de ${area.toFixed(2)} metros quadrados`);
}
let raio = 5;
let pi = 3.14;
calculoSalaCircular(raio, pi);

//Desafio 6 
function tabuada(numeroParaTabuada) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numeroParaTabuada * i;
        console.log(`${numeroParaTabuada} x ${i} = ${resultado}`);
    }
}

let numeroParaTabuada = 5;
tabuada(numeroParaTabuada);
