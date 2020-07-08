/*
//ARRAY É CONSIDERADO UM OBJETO INDEXADO AUTOMATICAMENTE, PORÉM HÁ COMO SABER SE É UM ARRAY OU OBJETO
let vetor = [1, 2 , 3];
console.log(vetor instanceof Array); //retorna true se for array


//NO JAVASCRIPT, PODEMOS CRIAR ARRAYS CONTENDO QUALQUER TIPO DE DADOS, INCLUSIVE COM DADOS 
//DIFERENTES, EX:
let vetor = ['jean', 'domingues', 18, 76, function somar(n1,n2){return n1+n2}];
console.log(vetor[4](10,5)); //chama a fução de dentro do array, e passa como parametro 10 e 5
//NÃO É UMA BOA PRÁTICA DE PROGRAMAÇÃO FAZER ISSO


//SABER O TAMANHO DE UM ARRAY
let vetor = [1,2,3,4,5];
console.log(vetor.length)
let x = vetor.length; //X = 5
console.log(x);


//JOIN 
//trasnforma todos os valores de um array em uma string
let nomes = ['jean', 'camila', 'gabriel']
let stringDeNomes = nomes.join(' ') //parametro passado será uma string que ficara entre cada elemento
// no caso, um espaço
console.log(stringDeNomes);


//ADICIONAR VALORES AO ARRAY, DIFERENTES FORMAS
let vetor = [1, 2, 3, 4, 5];

//ADICIONAM NO FIM DO ARRAY (PUSH)
vetor[5] = 6;
vetor[vetor.length] = 7;
vetor.push(8);

//ADICIONA NO COMEÇO, MOVENDO TODOS PARA FRENTE (UNSHIFT)
vetor.unshift(0);
console.log(vetor);



//REMOVE ELEMENTOS DO MEU ARRAY
//POP
let vetor = [1,2,3,4,5,6];
vetor.pop(); //remove o ultimo elemento
let removidoFim = vetor.pop(); //remove o ultimo elemento e o guarda em uma variavel
//SHIFTH
let removidoInicio = vetor.shift(); //remove o primeiro elemento e o guarda em uma variavel
//DELETE
delete vetor[1]; //remove o elemento, pórem não altera os demais indices, este continua, porem, undefined
console.log(vetor)


//FATIANDO MEU ARRAY (SLICE)
let vetor = [0,1,2,3,4,5,6];
console.log(vetor.slice(0,3)) //Pega todos os elementos de 0 até 3, sem contar o indice 3
console.log(vetor.slice(-3, -1)) //Pega todos os elementos de 4 até 6, contando o 6


//CONSTANTES ARRAY
const vetor = [1, 2 , 3];
//posso mudar somente os elementos array, não o array, não posso reatribuir
vetor = 'jean'; //não pode
*/

