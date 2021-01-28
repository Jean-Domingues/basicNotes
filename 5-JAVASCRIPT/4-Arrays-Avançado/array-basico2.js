//REVISÃO DO BÁSICO + OUTROS CONCEITOS

//DELETE
const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete meuArray[3]; //deleta apenas o valor, mantendo o indice

//USANDO O CONSTRUTOR DO ARRAY
const meuArrayComConstrutor = new Array(1, 2, 3, 4, 5, 6)
//funciona para qualquer tipo de dado, é só alterar o nome para new 'tipoDado';

//ARRAY SÃO DADOS POR REFERENCIA
const vetor1 = [1,2,3]
const vetor2 = vetor1;
vetor2[3] = 4; //atribui o endereço de memória, não os valores
//maneira de corrigir(operador spred/rest)
/*
const vetor2 = [...vetor1];
*/

//Atributo length(pega o tamanho do array)
const tamanhoArray = [1,2,3,4,5];
let tamanho = tamanhoArray.length; // 5

//POP (remove o ultimo elemento)
const removeUltimo = [1,2,3,4,5];
let x = removeUltimo.pop(); //remove o ultimo e atribui o elemento a x

//SHIFT (remove o primeiro elemento)
const removePrimeiro =  [1,2,3,4,5];
let primeiro = removePrimeiro.shift(); //remove o primeiro, desloca os indices para
// trás e atribui o valor removido a var

//PUSH (add valores ao array)
const meuPush =  [1,2,3,4,5];
meuPush.push(6);

//UNSHIFT (add valores no começo do array)
const meuUnshift =  [1,2,3,4,5];
meuUnshift.unshift(0);  //add um valor no começo e desloca os indices para frente

//SLICE (fatia meu array)
const vouSerFatiado =  [0,1,2,3,4,5];
let pedaçoRetirado = vouSerFatiado.slice(0,3); //parametros: inicio, fim+1
pedaçoRetirado = vouSerFatiado.slice(0,-2); //parametros: começa no 0, e termina no tamanho da string-2

//SPLIT (transforma uma string em um array)
const sereiSeparado = 'jean domingues';
const separação = sereiSeparado.split(' '); //parametro: criterio para separação

//JOIN (une meus elementos do array em uma string)
const istoSeraString = ['jean','domingues'];
let unindo = istoSeraString.join(' '); //parametro: caractere separador por padrão é a virgula

//TRANSFORMA UMA STRING EM UM ARRAY (Array.From(nomeArray))
const numeros = '12345678';
const numerosSeparados = Array.from(numeros)


//REPETE UM MESMO ELEMENTO DE UMA STRING N VEZES  
const nums = "12345"
let soUns =  nums[0].repeat(4) //saida: 1111


//CRIA ARRAY E PREENCHE SUAS POSIÇÕES
const meuNovoArray = Array(10).fill(0)
console.log('meu array', meuNovoArray);


// MÉTODOS PARA PESQUISA EM ARRAYS

//Find
const a = [1,2,3,4,5,6]
a.find((element, index, array) => {
  element == 1 //true
})

//FindIndex 

// findIndex()funciona de forma semelhante a find(), mas retorna o índice do primeiro 
// item que retorna verdadeiro e, se não for encontrado, retorna -1:

a.findIndex((element, index, array) => {
  element == 7 //-1
})
