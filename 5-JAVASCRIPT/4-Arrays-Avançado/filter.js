//Função FILTER
 /*
Filtra os elementos de um array, e os coloca em outro, chamando uma função que tem parametros de, 
o primeiro é o valor o segundo o indice e o terceiro o array.

O retorno da função chamada por filter, será booleano, sendo true, o valor condiz
com o filtro, portanto será adicionado ao novo array, e false para não ser;
*/
//sintaxe
const meuArray = [10, 12, 34, 52, 1, 4, 3, 2, 7, 89, 5, 6]
function selecionaMaior10(valor, indice, array){
    if(valor > 10) return true
    return false
}
const arrayFiltrado = meuArray.filter(selecionaMaior10)

/*******************************************************************/

//forma simplificada 
const novoArray = meuArray.filter(valor => valor > 10) //como tem só uma expressão, não necessita de return
console.log(novoArray)

/*******************************************************************/






//EXERCÍCIO PARA EXEMPLIFICAR

//retorne as pessoas que o nome tem 5 letras ou mais
//retorne as pessoas que tem mais de 50 anos
//retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'Luiz' , idade: 62},
    {nome: 'Maria' , idade: 23},
    {nome: 'Ana' , idade: 55},
    {nome: 'Leticia' , idade: 19},
    {nome: 'Rosana' , idade: 32},
    {nome: 'Jean' , idade: 70},
];

const NomeGrande = pessoas.filter( valor => valor.nome.length >= 5);
const pessoasVelhas =  pessoas.filter(valor => valor.idade > 50);
const nomeFinalA = pessoas.filter(valor => valor.nome.endWith('a'));

