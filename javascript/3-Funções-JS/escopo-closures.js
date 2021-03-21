//ESCOPO EM JS
//uma estrutura procura em ordem crescente, a declaração das variaveis, começando
// por ela mesma, indo para seu pai, depois o pai do pai, e assim vai....
let aquiEhOEscopoGlobal = 'global';

function escopoDeFuncao() {
    let aquiEhOEscopoGlobal = 'escopo de funcao'; //procura primeiro no seu container
    //depois parte para o container pai, no caso o global
    if (true) {
        let aquiEhOEscopoGlobal = 'escopo do if' //declarando a mesma variavel porem
        // em um escopo menor
        console.log(aquiEhOEscopoGlobal);
    }
    console.log(aquiEhOEscopoGlobal);
}
escopoDeFuncao();

//VARIAVEL GLOBAL, SEM SER GLOBAL
//se eu crio uma variavel sem as palavras reservadas var ou let de preferencia
//esta variavel se torna global, mesmo se for criada dentro de uma function, desde que a function
//seja chamada é claro

function criaVariavelGlobal(){
    variavelGlobal = 'ola, eu sou onipresente'
}
criaVariavelGlobal();
console.log(variavelGlobal);

/* ...................................................*/

//CLOSURES
/*
Principal caracteristica, memorização de declaração, ou seja, quando uma função é 
chamada e esta, utiliza dados de outro escopo onde ela foi criada, mesmo não chamando mais
a função pai, a função filha memoriza a declaração do dado, e tambem onde foi criada

no momento em que eu chamo uma função, ela fecha o escopo e as variaveis que estão dentro dela 
e do pai no momento da execução são definidas como closures dela

Ou seja, mesmo se eu tiver chamado a função pai a muito tempo, quando eu utilizar as
funções filhas, elas se lembrarão do que foi declarado na função pai, e utilizarão
a seu favor, exemplo:
*/
function funcaoPai() {
    let lembreiDeVoce = 'Lembre de mim';
    return function () {    //esta função sempre terá acesso aos dados do pai, se este for chamado
        // pelo menos uma vez
        return lembreiDeVoce;
    }
}
let armazenaOPai = funcaoPai();
console.log(armazenaOPai());

//SEGUNDO EXEMPLO
function imprimeNome(nome) {
    return function () {
        console.log(nome);
    }
}
function inicializa() {
    let nome = 'jean';
    setTimeout(imprimeNome(nome), 1000); 
    //setTimeout espera uma função, e estou mandando como parametro a execução de 
    // uma função, porém, o retorno desta função executada é outra função
    // por isto meu setTimeout executa minha ação corretamente
}
inicializa();

/* ...................................................*/

//outra maneira de printar valores
console.dir('ola mundo')
//esta maneira apresenta diferenças, que eu não tive vontade de procurar agora