/*
funciona como um prótotipo que é criado pela função construtora onde
todos os objetos instanciados por ela tem acesso, seria o pai de todos
os objetos, onde pode conter funções ou atributos compartilhados por todos
sem que estes precisam estar criados no próprio objeto.

Funciona como uma herança, onde o objeto que tem um protótipo herda dele todos 
metodos e atributos
*/

function Pessoa (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.falaNomeCompleto = function (){ //acessa o protótipo e adiciona um métôdo
    return `Oi, meu nome é ${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('jean', 'Domingues');

console.log(pessoa1.falaNomeCompleto())

/*
Em objetos literais, o protótipo criado para ele é somente o prótotipo geral
presente em todos os objetos, o Object.prototype, pórem podemos setar outros 
prototypes para ele, como será visto em, trabalhando-prototypes
*/