//Uma maneira enxuta de executar promises
/*
Uma função async permite eu utilizar o wait para "esperar" uma promise, para
que seja executada a posterior, dando assim, uma falsa impressão de sincronismo

*/

function rand(min = 1, max = 3) {
    min *= 1000
    max *= 1000
    return Math.round(Math.random() * (max - min) + min);
}

function aguarde(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject("ERRO")
        }
        setTimeout(() => {
            resolve(msg)
        }, time);
    })
}

async function executa() {
    try {
        const fase1 = await aguarde('fase 1', rand())
        console.log(fase1)
        const fase2 = await aguarde('fase 2', rand())
        console.log(fase2)
        const fase3 = await aguarde(2, rand())
        //como há um erro aqui, ele irá direto para o catch
        console.log(fase3)
        const fase4 = await aguarde('fase 4', rand())
        console.log(fase4)
    }catch(erro){
        console.log(erro)
    }
}
executa()