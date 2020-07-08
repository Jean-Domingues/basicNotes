/* 
//converte string p numero
let num = '23';
num = Number(num);
console.log(num);

//converte num para string
let num = 21;
num = String(num); // OU num = num.toString()
console.log(num + 2);

//FUNÇÃO toString
let num = 2
num = num.toString(); //converte num para string
num = num.toString(2); //representação binária

//FUNÇÃO toFixed() 
let num = 10.5836938294985;
console.log(num.toFixed(2)); //imprime com duas casas decimais, já arredondado


//FUNÇÃO Number.isInteger()
let num = 4.5;
console.log(Number.isInteger(num)); //retorna true se for inteiro

//FUNÇÃO Number.isNaN()
let num = 23;
console.log(Number.isNaN(num*'oi')); //retorna true se NaN(not a number) = true


//IMPRECISÃO EM JAVASCRIPT
console.log(0.7 + 0.1); //0.79999999
console.log(Number(0.7 + 0.1).toFixed(2)); //corrige o problema
*/

