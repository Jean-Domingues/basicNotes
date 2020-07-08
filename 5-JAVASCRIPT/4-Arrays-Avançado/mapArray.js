//FUNÇÃO MAP
/*
Funciona da mesma forma que o filter, com os mesmos parametros, porém 
sempre irá ter como resultado, um array com o mesmo tamanho do original.
Retorna o novo valor do array a cada iteração 
*/

const numeros = [1,2,3,4,5,6,7,8,9];
const numerosx2 = numeros.map(valor => valor *2) //armazena na constante os valores do array 
// multiplicado por 2

//EXERCICIO PARA EXEMPLIFICAR

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa 
//Remova apenas a chave "nome" do objeto
//Adiciona uma chave "id" em cada objeto

const pessoas = [
    {nome: 'Luiz' , idade: 62},
    {nome: 'Maria' , idade: 23},
    {nome: 'Ana' , idade: 55},
    {nome: 'Leticia' , idade: 19},
    {nome: 'Rosana' , idade: 32},
    {nome: 'Jean' , idade: 70},
];

const nomes = pessoas.map(valor => valor.nome)
const idades = pessoas.map(valor => ({idade: valor.idade}))
 //ou:  {delete valor.nome return valor}
const id = pessoas.map( (valor, indice) => ({id: indice, nome: valor.nome, idade: valor.idade}))

console.log(id)