
//IMPORTANTE, EM JAVASCRIPT, HÁ DIVISÃO POR ZERO = INFINITY = TRUE
//ARREDONDAMENTOS
let num = 9.47840;
console.log(Math.floor(num)); //arredonda para baixo(numero inteiro)
console.log(Math.ceil(num)); //arredonda para cima(numero inteiro)
console.log(Math.round(num)); //arredonda para o mais proximo(numero inteiro)


//FUNÇÃO Math.max() E Math.min()
console.log(Math.max(1,2,3,4,5,6,7,8)) //retorna o maior valor(8)
console.log(Math.min(1,2,3,4,5,6,7,8))//retorna o menor valor


//FUNÇÃO Math.random()
let numRandom = Math.random();
console.log(numRandom);
//expresão para achar numeros aleatorios entre 5 e 10
numRandom = Math.round(Math.random()*(10-5)+5);
console.log(numRandom);


//OUTRAS FUNÇÕES
let pi = Math.PI; //Atribui a variavel o valor de pi
console.log(pi)
console.log(Math.pow(2, 2)); //pow(base, expoente) , ou console.log(2**2);
console.log(Math.sqrt(9)); //pega a raiz quadrada de 9


