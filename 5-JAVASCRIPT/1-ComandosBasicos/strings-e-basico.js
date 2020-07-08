// COMANDOS INICIAIS JAVASCRIPT
/*
console.log(typeof criandoConstante) // comando typeof serve para mostrar o tipo de um elemento

//CONVERTENDO VALORES
let numero1 = 5;
let numero2 = '5';
numero1 = Number(numero1)
console.log(numero1+ parseInt(numero2)) //parseInt()=converte um dado para inteiro quando possivel

//SWAP SIMPLES
let a = 'A';
let b = 'B';
[a, b] = [b, a]    //atribuição via desestruturação



//STRINGS{
//TEMPLATE STRINGS
//outro modo de printar dados usando crase ``, console.log(`Texto ${variavel} texto`)

let text = 'a barra invertida tem funções \'diferentes\' dentro de uma string';
let char = text[0]; //pega apenas o valor 'a'
let char1 = text.charAt(2); //pega apenas o valor 'b'
let text1 = text.concat(' ' , 'concatena', ' ' ,'textos');
console.log(text1);

//FUÇÃO INDEX OF
let encontrou = text.indexOf('invertida') //indexOf(palavra, a partir de N indice)
encontrou = text.lastIndexOf('invertida', 3)//conta de trás para frente os indices
//retorna a posição inicial da palavra informada, caso ache, se não, retorna -1


//FUNÇÃO REPLACE
let texto = 'meu texto'
console.log(texto.replace('meu', 'seu')) // troca 'meu' por 'seu'


//FUNÇÃO LENGTH
let text = 'tamanho de uma string'
console.log(text.length) //é um atributo, portando não utiliza parenteses


//FUNÇÃO SLICE 
let texto = 'esta função fatia e retorna o texto pegando somente uma parte';
console.log(texto.slice(0,5)); //texto.slice(inicio, fim+1), podemos usar numeros negativos 

//FUNÇÃO SPLIT 
let texto = 'divide as palavras por um determinado caractér retornando um array';
console.log(texto.split(' ' , 3)); //divide as palavras separando por espaço, limite de 3 vezes


//FUNÇÕES PARA DEIXAR MAISCULO OU MINUSCULO
let texto = 'Maisculo ou Minusculo';
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
//}






//comandos específicos do navegador
//alert('cria uma alerta que não retorna nada')  
//window.confirm('alerta com duas opções que retorna valores lógicos')
//window.prompt('pede pro usuario digitar uma coisa')




/*
//CONTEUDO JS ATÉ AGORA
criar variaveis com let e var
sendo que let se remete a escopo de bloco e var não

Desvios condicionais, if, else, else if

Laços de repetição como for, while, do while
novas maneiras de escrever um for

funções, como criar funções, para que servem, como chamar, parâmetros
retornos.

DOM(document object model = Modelo de Objeto de Documento) como acessar o DOM getElements, eventos de mouse, teclado 
*/
