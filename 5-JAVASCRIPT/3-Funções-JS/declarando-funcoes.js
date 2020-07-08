//EM JAVASCRIPT, FUNÇÕES SÃO TRATADAS COMO DADOS TAMBEM, PORTANTO, TEM O MESMO COMPORTAMENTO
// DE UM DADO QUALQUER, PODENDO SER PASSADAS POR PARAMETRO

/*
//DECLARAÇÃO LITERAL, ONDE OCORRE HOISTING (elevação da declaração)
function falaOi(){
    console.log('oi');
}
*/

/*...............................................................*/


/*
//ATRIBUINDO A VARIAVEIS/CONSTANTES
//funções são First-class objects (objetos de primeira classe)

//exemplo de function expression
const souUmdado = function (){
    console.log('sou um dado')
}; //precisa terminar com ponto e vírgula

//podemos receber funcões por parametro, e utiliza-las em outras funções, assim 
// como ser retornadas tambem

function executaFuncao(funcao){
    funcao();
    //return funcao();
}
executaFuncao(souUmdado);   //passa uma função como parametro para outra funcao
*/

/*...............................................................*/


/*
//ARROW FUNCTION
let umaArrowFunction = (parametro) => {
    console.log('sou uma arrow function');
}
umaArrowFunction();
*/

/*...............................................................*/


/*
//DECLARADO COMO DENTRO DE UM OBJETO
//primeira forma declarando dentro de um atributo, mais antiga
const obj = {
    falar: function(){
        console.log('estou falando');
    }
}
obj.falar();
//segunda forma, declarando como método
const obj2 = {
    falar(){
        console.log('Eu sou um método falante');
    }
}
obj2.falar();
*/