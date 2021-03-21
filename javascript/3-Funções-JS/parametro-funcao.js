//FUNÇÃO SEM PARAMETROS, MAS COM ARGUMENTOS?
//uma função pode não esperar argumentos, porém posso enviar do mesmo jeito
//isto só vale para funções criadas com a palavra 'function'

function umaFucao() {
    console.log(arguments[0]); //por meio de arguments[indiceParametroEnviado], é possivel
    //  acessar estes parametros "perdidos"
}
umaFucao('nao esta esperando parametros porem envio do mesmo jeito')

//exemplo:
function somaValores(X, Y, e) { //a fução pode esperar parametros tambem, e ter mais parametros do
    // que argumentos isso nao altera em nada
    // os parametros que não são atendidos, são definidos como undefined
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
somaValores(5, 5)

/*...............................................................*/

//ENVIANDO ARGUMENTOS POR ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
function recebeUmObjeto({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
const meuObjeto = { nome: 'jean', sobrenome: 'domingues', idade: 19 };
recebeUmObjeto(meuObjeto);
recebeUmObjeto({ nome: 'jean', sobrenome: 'domingues', idade: 19 });
//funciona das duas maneiras

//e tambem funciona com arrays
function recebeUmArray([valor1, valor2, valor3]) {
    console.log(valor3);
}
recebeUmArray([1, 2, 3]);

/*...............................................................*/

//UTILIZANDO O REST PARA PEGAR OS ULTIMOS PARAMETROS
//guarda os outros valores em um array, funciona em qualquer declaração de função
function utilizaORestante(valor1, valor2, ...restante) {
    console.log(valor1, valor2, restante);
}
utilizaORestante(1, 2, 3, 4, 5, 6);
//exemplo com arrow functions
const restanteArgs = (...args) => {
    console.log(args);
}
restanteArgs(1, 2, 3, 4, 5, 6, 7);
/*...............................................................*/
