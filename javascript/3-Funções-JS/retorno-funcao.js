//A FUNÇÃO ENCERRA QUANDO ENCONTRA UM "return"
//POR MEIO DO RETURN, POSSO RETORNAR VALORES PARA QUEM CHAMOU A FUNÇÃO
//EM JS, PODEMOS RETORNAR QUALQUER COISA, LITERALMENTE, INCLUSIVE OUTRA FUNÇÃO

/*...........................................................................*/

//RETORNADO
function retornaAlgumaCoisa() {
    return 'retorno';
} //o retorno dessa função pode ser atribuido a outras coisas, como variaveis
let meuRetornoEstaAqui = retornaAlgumaCoisa();
//se a função não retorna nada, será atribuido o valor undefined na minha variavel

/*...........................................................................*/

//RETORNANO UM OBJETO 
function criaPessoa(nome, idade) {
    return { nome, idade };     //o próprio js cria as chaves dos atributos
}
let meuObjeto = criaPessoa('jean', 19)

/*...........................................................................*/

//RETORNANDO UMA FUNÇÃO
function retornaFuncao(comecoTexto){    //funções encadeadas
    function retornaString(fimTexto){
        return comecoTexto + ' ' + fimTexto;
    }
    return retornaString; //chamando a função sem os parenteses, 
    // significa chama-la mas não executa-la
}
const texto1 = retornaFuncao('ola');
console.log(texto1('mundo'));

/*...........................................................................*/

//EXEMPLO DE RETORNO DE FUNÇÃO
function criaMultiplicador(multiplo){
    return function(n){
        return n*multiplo;
    };
}
let triplica = criaMultiplicador(3); //armazena uma função dentro desta variavel
console.log(triplica(2));   //chama a função que estava dentro da var

/*...........................................................................*/
