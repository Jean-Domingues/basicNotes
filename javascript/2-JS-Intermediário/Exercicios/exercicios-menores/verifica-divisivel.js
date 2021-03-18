//ESCREVA UMA FUNÇÃO QUE VERIFICA RECEBE UM NUMERO
// E RETORNE O SEGUINTE:
//Numero é divisivel por 3: fizz
//Numero é divisivel por 5: buzz
//Numero é divisivel por 3 e por 5: FizzBuzz
//Numero NÃO é divisivel por 3 ou por 5: numero
//Verificar se é realmente um numero
//usar com numeros de 1 a 100

function verificaDivisao(num){
    if(Number.isNaN(Number(num))){
        return 'Não é um numero';
    }
    if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }
    if(num % 3 === 0){
        return 'Fizz';
    }
    if(num % 5 === 0){
        return 'Buzz'
    }
    return num;
}

for(let i = 0; i<100; i++){
    console.log(verificaDivisao(i));
}
