//GETTER = obtem o valor de tal elemento, é um atributo
//SETTER = seta valor para um elemento, é um métôdo 

//USANDO GETTERS E SETTERS EM FUNÇÕES CONTRUTORAS

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('errou otario')
            }
            estoque = valor
        }
    })
}

const sabao = new Produto('sabao', 2, 5);
sabao.estoque = 2;
console.log(sabao.estoque)

//GETTERS E SETTERS EM UMA FUNÇÃO FÁBRICA

function CriaPessoa (nome, idade){
    return{
        nome,
        idade, 

        get falaIdade(){
            return `Eu tenho ${this.idade} anos`
        },

        set atribuiIdade(valor){
            this.idade = valor;
        }
    }
}

const pessoa1 = CriaPessoa('jean', 19)
console.log(pessoa1.falaIdade)
pessoa1.atribuiIdade = 12
console.log(pessoa1.falaIdade)