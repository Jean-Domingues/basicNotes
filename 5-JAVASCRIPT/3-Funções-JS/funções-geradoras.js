//SÃO FUNÇÕES QUE ME RETORNAM DIFERENTES VALORES A CADA VEZ QUE EU CHAMO ELAS
//EX:
function* geradora(){ //o '*' que define uma função geradora
    //código qualquer
    yield 'valor 1';
    //código qualquer
    yield 'valor 2'
    //código qualquer
    yield 'valor 3'
   //código qualquer
}
const myGeradora = geradora();  //para avançar os valores é preciso atribuir a função a uma var
console.log(myGeradora.next()) //retorna um objeto contendo o valor de retorno da função e 
// um boolean, que será true quando não existir mais valores
console.log(myGeradora.next().value) //saída 'valor 1'
console.log(myGeradora.next().value) //saída 'valor 2'
console.log(myGeradora.next()) //saída: { undefined , done: true (pois acabou os valores)} 

/*.............................................................................. */

//ITERANDO SOBRE A FUNÇÃO GERADORA 
const g1 =  geradora()
for(let valor of g1){
    console.log(valor) //valor assume o valor de g1.next().value
}

/*.............................................................................. */

//EXEMPLO DE CONTADOR COM FUNÇÕES GERADORAS
function* contador (){
    let i = 0 ;
    
    while(true){
        yield i;
        i++
    }
}

const conta = contador();
for(let i = 0 ; i<10; i++){
    // console.log(conta.next().value) //saída: 0,1,2,3,4,5,6,7,8,9
}

/*.............................................................................. */

//DELEGANDO FUNÇÕES GERADORAS
function* contaAte3(){
    yield 1;
    yield 2;
    yield 3;
}

function* contaAte6(){
    yield* contaAte3(); //irá chamar a função e executar todos os seus 'yield', contando
    // como se fossem os seus
    yield 4;
    yield 5;
    yield 6;
    
    
}
const x = contaAte6()
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)

/*.............................................................................. */

//POSSO RETORNAR QUALQUER COISA PELO YIELD
// O RETURN ENCERRA A FUNÇÃO, E NÃO EXECUTARA OS PROXIMOS YIELD'S
function* minhaFuncaoGeradora(){
    yield function(){
        console.log('primeiro yield');
    }
    yield function(){
        console.log('segundo yield');
    }
    return function () {
        console.log('return, não irei executar o próximo')
    }
    yield function(){
        console.log('primeiro yield');
    }
    
}

const retornaFuncao = minhaFuncaoGeradora();
retornaFuncao.next().value(); //precisa dos parenteses para a função ser executada
retornaFuncao.next().value();
retornaFuncao.next().value();

