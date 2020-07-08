//IIFE immediatly invoked function expression
//funções imediatas são funções que são invocadas imediatamente, mesmo sem ser chamadas
/*
Elas devem ser cobertas por parenteses, e no final serem executadas
*/

//SINTAXE:
/* //envolvo a função entre parenteses
( function (){       
    meu código vai aqui
})();       
//Depois eu chamo a função 
*/

//UTILIZANDO FUNÇÕES NORMAIS
(function (nome, idade){    //pode esperar parametros
    console.log(nome, idade)
})('jean', 19);


//FUNÇÕES IMEDIATAS COM ARROW FUNCTIONS
let myFunc = (()=>{
    console.log('Arrow function')
})()