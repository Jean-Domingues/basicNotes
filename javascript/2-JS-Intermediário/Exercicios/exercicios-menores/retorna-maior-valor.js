

//ESCREVA UMA FUNÇÃO QUE RECEBA 2 VALORES E RETORNE O MAIOR DELES

//PRIMEIRA FORMA DE RESOLUÇÃO
function retornaMaiorValor(x,y){
    return Math.max(x, y );
}

//SEGUNDA FORMA DE RESOLUÇÃO
const maior = (x,y) => x>y ? x:y; //usando uma arrow function e uma condição ternária
console.log(maior(10,90));