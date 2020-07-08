//trabalhando com prototypes
/*
Em prototypes há a ideia de cadeia, onde o objeto atual, pode acessar
funções e atributos do seu protótipo pai/avô/bisavô...

Porém caso haja atributos/metodos repetidos, os que aparecerem primeiro
é que serão executados
*/
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA) //define objA como prótotipo de ObjB,
// passando assim o acesso a todos os seus atributos e metódos 

/*********************************************************** */


//USANDO EM FUNÇÕES CONSTRUTORAS
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.fala = function () {
    return `Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos`;
}
const pessoa1 = new Pessoa('jean', 19)

const pessoa2 = {       //cria um objeto literal sem relação com a 
    // função contrutora criada anteriormente
    nome: 'Camila',
    idade: 19
}
Object.setPrototypeOf(pessoa2, Pessoa.prototype) //seta o protótipo da função contrutora 
// ao objeto literal, este que passa a ter acesso a todos os metódos do protótipo

/*********************************************************** */

//CRIANDO O OBJETO E SETANDO O SEU PROTÓTIPO (Object.create())

const pessoa3 = Object.create(Pessoa.prototype, { //(protótipo, chaves(com ou sem propriedades))
    //segundo parametro é opcional 
    idade: {
        value: 20,
        enumerable: true,
        writable: true,
        configurable: true
    },
    //Já posso criar as chaves e definir suas propriedades
    nome: {
        value: "bidu",
        enumerable: true,
        writable: true,
        configurable: true
    }
})

//Agora pessoa3 tambem tem acesso ao método fala de "Pessoa.prototype"