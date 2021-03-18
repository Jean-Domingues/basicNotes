/*
//posso usar parenteses na condição 
expressão de condição ? possibilidade verdadeira : possibilidade falsa

*/
let idade = 19;

let maiorDeIdade = idade >= 18 ? true : false ;
console.log(maiorDeIdade); //saída true

const corFundo = null;
const corPadrao = corFundo || 'branco';
console.log(corPadrao); //saída será branco, pois o usuario não escolheu uma cor