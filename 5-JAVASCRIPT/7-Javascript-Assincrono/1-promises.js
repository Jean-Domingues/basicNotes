//PROMISES 
/*
São funções de callback que tem uma melhor identação no código,
ou seja, ao invés de utilizar callbacks onde tem uma função dentro da outra
"codigo hadouken" utilizamos promises para otimizar este processo.

Promises são geralmente utilizadas em requisições ao servidor, que podem def

ESTADOS DE UMA PROMISE
---Pending => pendente
---fullfiled => resolvida
---rejected => rejeitada
*/

//CALLBACK (como era feito)
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.round(Math.random() * (max - min) + min);
}

function consultaAlgo(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb() //verifica se há callback e executa
    }, tempo)
}

/* como fazer estas chamadas ás funções serem realizadas em ordem?
consultaAlgo(1, rand(1, 3))
consultaAlgo(2, rand(1, 3))
consultaAlgo(3, rand(1, 3))
*/

//callbacks!
//agora serao executadas em ordem
/*
consultaAlgo(1, rand(1, 3), function () {
    consultaAlgo(2, rand(1, 3), function (){
        consultaAlgo(3, rand(1, 3))
    })
})
*/
//Grande problema de identação de código

/*********************************************************************** */


//PROMISES

function esperaUmMomento(msg, tempo) {
    //Parametros de uma promise: (seDerCerto, seDerErrado)
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE') //chama esta função caso o valor seja
            // invalido
        }

        setTimeout(() => {
            resolve(msg) //chama esta função se meu valor for valido
        }, tempo)
    })
}

//Quando queremos executar algo de forma sequencial, retornamos no then outra
// promise que será executada pelo próximo then, e assim por diante

esperaUmMomento('1 frase', rand(1, 3)).then(msg => {
    console.log(msg)
    return esperaUmMomento('2 frase', rand(1, 3))
}).then(msg => {
    console.log(msg)
    return esperaUmMomento(2, rand(1,3))
}).then(msg => {
    console.log(msg)
}).catch(msg => {
    console.log('ERRO: ' + msg)
})