/*
//VALORES AVALIADOS EM FALSE PARA O JS 

FALSY =      //qualquer valor diferente disso será verdadeiro:

        false = valor literal
        0 = valor zero
        ''  ""   ``  = strings vazias
        null / undefined = falsos 
        NaN = not a Number

//CURTO CIRCUITO 
    //retorna o valor mesmo, e não true / false

    console.log('jean' && 'domingues' && 2 && null && 8 ) //retorna o primeiro valor falso, caso não ache 
    //retorna o valor que parou

    console.log( '' || null || undefined || 2 || 'jean') //retorna o primeiro valor verdadeiro, caso não
    //ache retorna o valor que parou


//usando o curto circuito para condicionar a chamada de uma função
 
function oi(){
    return 'oi'
}
let condicao;

console.log(condicao || oi()); //retorna o primeiro valor verdadeiro, no caso a função

console.log(null || undefined || '' || true && '' || "jean") //saida = jean

*/

//situação em que podemos utilizar curto circuito

const corQueOUserEscolheu = 'vermelho';
const corDoSite = corQueOUserEscolheu || 'preto';  //se o user não escolher cor, a padrão será preto

console.log("jean" && 3);

