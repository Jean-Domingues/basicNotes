//MÉTODOS UTEIS PARA OBJETOS 

/*
Object.keys(obj) = retorna as chaves de "obj"
Object.freeze(obj) = congela alterações em "obj"
Object.defineProperty(obj, 'chave') = define propriedade para uma chave
Object.definePropeties(obj, {
    chave:{

    },
    chave2:{

    }
}) = define propriedades para várias chaves
*/


/*********************************************/
//COPIANDO UM OBJETO PARA O OUTRO (spread operator)
const primeiro = {
    nome: 'jean',
    idade: 19
}
const segundo = {...primeiro, sobrenome: 'pinto'}
//COPIANDO UM OBJETO PARA O OUTRO UTILIZANDO O ASSIGN(destino, objetos...)
const terceiro = Object.assign({}, primeiro, {peso: 80}) //concatena objetos 


/*********************************************/
//Object.getOwnPropertyDescriptor(objeto, 'chave') mostra as propriedades da chave
const meuObjeto = {
    nome:'Arroz',
    kg: 3
}
 console.log(Object.getOwnPropertyDescriptor(meuObjeto, 'nome'))
     //mostrara todas as propriedades de nome


/*********************************************/
//RETORNA OS VALORES DE UM OBJ
console.log(Object.values(meuObjeto)) //retorna um array com todos os valores de meuObjeto 

/*********************************************/

//RETORNA OS VALORES E AS CHAVES DE UM OBJETO 
Object.entries(meuObjeto) //retorna um array para cada chave do meu objeto, com o seu respectivo valor

//ITERANDO USANDO DESTRUCTURING
for(let [i, o] of Object.entries(meuObjeto)){
    console.log(i, o)
}