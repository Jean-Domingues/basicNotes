//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*
//USANDO PARA SWAP
let a = 'A'
let b = 'B'
let c = 'C'
let vetor = [1 , 2 , 3];
[a, b, c] = vetor; //atribuo novos valores as variaveis
console.log(a,b,c)


//USANDO PARA CRIAR VARIAVEIS/COSNTANTES
let ordem = ['primeiro numero', 'segundo numero', 'terceiro numero'];
let [num1, num2, num3] = ordem; //cria e atribui valores as variaveis, com a ordem dos indices
console.log(num1, '+', num2, '+', num3);


//OPERADOR REST QUE PEGA O RESTO DO ARRAY QUE NÃO FOI ATRIBUIDO
let ordem = ['primeiro numero', 'segundo numero', 'terceiro numero', 'quarto', 'quinto', 'sexto'];
let [num1, num2, num3, ...resto] = ordem; //cria um array resto, e joga o resto dos valores nele
console.log(num1, '+', num2, '+', num3);
console.log(resto);



//PULANDO INDICES E ESCOLHENDO APENAS OS QUE EU QUERO, COM ESPAÇOS VAZIOS
let vetor = [1, 2, 3, 4, 5, 6];
let [num1, , num3, , , num6] = vetor;
console.log(num1, num3, num6);


//ARRAY ENCADEADO EM JAVASCRIPT (Matriz)
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz[2][1]); //saida = 8


//USANDO A ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [ , , [ , oito,]] = matriz;
// console.log(oito);  //saida oito
const [lista1, lista2, lista3] = matriz;
console.log(lista1[2]); //saida = 3

*/

