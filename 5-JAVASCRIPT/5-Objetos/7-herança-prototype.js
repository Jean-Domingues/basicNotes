// Produto -> aumento, desconto
/*
Herança nada mais é do que a possibilidade de copiar métodos e funções de um objeto,
para outro objeto, podendo ou não, modificar estas propriedades (polimorfismo)

*/
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};


//CRIA UMA HERANÇA DE PRODUTO (Camiseta)
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //copia os metodos e atributos de outro objeto
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); //aponta o prototype de produto
// para camiseta
Camiseta.prototype.constructor = Camiseta; //Seta o construtor do objeto como Camiseta

Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};


//CRIA UMA HERANÇA DE PRODUTO (Caneca)
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



//MANIPULANDO OS OBJETOS 
const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
