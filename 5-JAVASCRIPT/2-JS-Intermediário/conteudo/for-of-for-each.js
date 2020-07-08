//FOR OF, ME RETORNA O VALOR DO ARRAY, NÃO O INDICE
const nomes = ['jean', 'camila', 'joao'];
for (const valor of nomes) {
    console.log(valor)  //a cada ciclo, o valor do incremento, será o valor de cada
    //elemento no array, em ordem crescente 
}

//FOR CLASSICO, geralmente com iteráveis (strings, arrays)
//FOR IN, retorna o indice ou chave (strings, objetos ou arrays)
//FOR OF, retorna o valor em si (iteráveis, arrays ou strings)


/*
//FOR EACH
nomes.forEach(function (valor, indice, arrayCompleto){
    console.log(`${indice}: ${valor}`)
})





const nomes = ['jean', 'camila', 'joao'];

//FOR CLASSICO
for(let i = 0; i<nomes.length; i++){
    console.log(nomes[i])
}

//FOR IN 
for (const i in nomes) {
    console.log(nomes[i]) 
}

//FOR OF
 for (const valor of nomes) {
    console.log(valor) 
}
*/