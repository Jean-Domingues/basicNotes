//METÔDO SPLICE SERVE PARA FAZER DIVERSAS ALTERAÇÕES NO MEU ARRAY/STRING

// meuArray.splice(ElementoSelecionado, deletarQuantos, 'valorASerEnviado1', 'valorASerEnviado2')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.splice(-1, 2) //seleciona o ultimo indice, e a partir dele remove 2 elementos, inclundo-o

//adicionando elementos 
numeros.splice(0, 0, 0) //pega o primeiro elementos, não remove nenhum, e add o numero
// 0 no lugar 
console.log(numeros)