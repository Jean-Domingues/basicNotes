//funções construtoras sempre começam com a palavra 'new', e também com a primeira
//letra maiúscula, ex:  let  data = new Date();


//VERIFICANDO SE É UM OBJETO DATE
let data = 1;
console.log(data instanceof Date); //retorna false


//PRIMEIRA FORMA DE UTILIZAÇÃO 

// new Date() com valor vazio, pega a data atual
// new Date(30000) com um valor, altera a data em ms
const tresHoras = 60 * 60 * 3 * 1000;   //em javascript o tempo é dado em milesegundos
const data = new Date(-tresHoras); //pega o marco zero (31/12/1969 as 21 horas) e volta 3 horas atrás
console.log(data.toString())


//SEGUNDA FORMA DE UTILIZAÇÃO (passando a data em numeros)
//os meses começam em janeiro = 0
const data = new Date(2020, 0, 16, 21, 30, 20, 500); //ano, mes, dia, hora, minuto, segundo, ms
console.log(data.toString()) //saída, data estipulada na criação da constante


//TERCEIRA FORMA DE UTILIZAÇÃO (passando a data em string)
const data = new Date('2020-01-16 21:30:20');
console.log(data.toString());



//QUARTA FORMA DE UTILIZAÇÃO (pegando os dados separados)
const data = new Date();
let dia = data.getDate(); //pega o dia
console.log('hoje já é dia', dia);
console.log('Do mês de', data.getMonth()+1); 
//os meses são representados de 0-11 senso 0 = janeiro
console.log('Do ano de', data.getFullYear());
console.log(`A hora atual é ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)
console.log('O dia da semana é', data.getDay() === 1 ? 'Segunda-feira' : 'outro dia');
//em dias da semana, 0 = domingo



//QUINTA FORMA DE UTILIZAÇÃO (obtendo a data sem criar variaveis)
console.log(Date.now()) //trás os milesimos de segudos desde o marco zero

// Formatando datas de acordo com o formato usado na máquina ( Usando INTL)

const data = new Date()
const dataFormat =  new Intl.DateTimeFormat().format(data)

