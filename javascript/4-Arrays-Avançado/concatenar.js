//CONCATENANDO ARRAYS 

//sintaxe: const junção =  array1.concat(array2)

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const unindo = a1 + a2; // junta os valores em uma string 
const unindo = a1.concat(a2, [7, 8, 9], 10); //concatena os arrays, e outros valores
console.log(unindo);

//SEGUNDA FORMA COM SPREAD OPERATOR
const unindoDeNovo = [...a1, ...a2, ...[7, 8, 9], 10];
console.log(unindoDeNovo)
