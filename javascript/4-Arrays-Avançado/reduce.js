//REDUCE 
/*
É mais utilizada para reduzir o array a um unico elemento
*/

const numeros = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;   //por padrão, "acumulador" tem o valor do primeiro item do array
    return acumulador;
})

/************************************************************************/

//O QUE NÃO FAZER COM REDUCE (neste caso utilizar filter)
//retorne os numeros pares do array
const meusNumeros = [23, 24, 53, 40, 64, 2, 10, 14, 5, 7, 99];
const pares = meusNumeros.reduce((acumula, valor) => {
    if (valor % 2 === 0) acumula.push(valor);
    return acumula;
}, [])

//EXEMPLO 
//retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Ana', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Jean', idade: 70 },
];

const maisVelho = pessoas.reduce((first, valor) => first.idade > valor.idade ? first : valor)
console.log(maisVelho)

//2
const meuArray = [1,2,3,4,5,6,7,8];
const ex = numeros.reduce((acumulador, valor) => acumulador += valor)

console.log(ex)