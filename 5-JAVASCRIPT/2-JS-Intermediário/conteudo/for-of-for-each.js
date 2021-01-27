//FOR OF, ME RETORNA O VALOR DO ARRAY, NÃO O INDICE
const meusNome = ['jean', 'camila', 'joao'];
for (const valor of meusNome) {
    console.log('NOMES DO PRIMEIRO EXEMPLO', valor)  
    //a cada ciclo, o valor do incremento, será o valor de cada elemento no array, em ordem crescente 
}

//FOR CLASSICO, geralmente com iteráveis (strings, arrays)
//FOR IN, retorna o indice ou chaves de um objeto (strings, objetos ou arrays)
//FOR OF, retorna o valor em si (iteráveis, arrays ou strings que no caso retorna a letra)



//FOR EACH
meusNome.forEach(function (valor, indice, arrayCompleto){
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


//iterate over the value
for (const value of ['a', 'b', 'c']) {
  console.log(value) //value
}

//get the index as well, using `entries()`
for (const [index, value] of ['a', 'b', 'c'].entries()) {
  console.log(index) //index
  console.log(value) //value
}