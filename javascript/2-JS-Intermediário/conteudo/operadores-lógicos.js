/*
> menor que
< maior que
>= maior ou igual que
<= menor ou igual que
== igual (compara apenas valor)      NÃO UTILIZAR
=== estritamente igual (compara valor e tipo)
!= diferente                         NÃO UTILIZAR
!== estritamente diferente


//COMPARANDO VALORES 
console.log(10 < 5); //retorna false
console.log(10 == '10'); //retorna true 
console.log( 10 === '10'); //retorna false


//ATRIBUINDO COMPARAÇÕES À UMA VARIAVEL
let comparaBool = 10 > 5 ; // a variavel passa a ter valor lógico de true 
console.log(comparaBool);


//OPERADORES LÓGICOS 
&& AND = E 
|| OR = OU  
! NOT  =  NEGAÇÃO
PRECEDÊNDIA DE EXECUÇÃO !, &&, ||



//TESTANDO OS OPERADORES LOGICOS
console.log( true && true && true) //saida true
console.log(true && true && false) //saida false
 
let expressao = true && true && true; //expressao tem valor true
console.log(expressao)
console.log(true || false || false || false || false)
*/
let valor = false || false || true && false || true; //valor = true
console.log(valor)

const usuario = 'jean', senha = '123456'
const vailogar = usuario === 'jean' && senha === '123456'; //vai logar recebe = true
console.log(vailogar)


//OPERADOR NOT !
let naoEhverdade = !true ; //operador ! nega toda a expressão, invertendo o valor
console.log(naoEhverdade) //saida false
console.log(!naoEhverdade) //está invertendo uma expressão que retorna false portanto retornará true
