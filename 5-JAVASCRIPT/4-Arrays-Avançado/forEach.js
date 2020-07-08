//FOR EACH
/*
itera sobre o array, funciona basicamente como o map/filter
 recebendo 3 parametros, o valor, o indice, e o array, porem não tem valor nenhum 
 de retorno, somente faz a iteração
*/

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a1.forEach((valor, indice, array) => {
    console.log(valor)
})