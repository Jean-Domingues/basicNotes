//Conceito de polimorfismo
/*
Cada instancia de uma classe, pode apresentar os mesmos métôdos porém, 
escritos de uma maneira diferente, como apresentado no exemplo abaixo,
cada conta tem uma maneira de sacar diferente, uma contem limite, e outra não.
*/
// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

//CRIANDO OBJETOS QUE INSTANCIAM A CLASSE CONTA

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); //utiliza os atributos e metodos de outro objeto
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype); //linka ao pai, conta
ContaCorrente.prototype.constructor = ContaCorrente; //Altera o contrutor 

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

//OUTRO OBJETO

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCor = new ContaCorrente(11, 22, 0, 100);
contaCor.depositar(10);
contaCor.sacar(110);
contaCor.sacar(1);

console.log();

const contaPou = new ContaPoupanca(12, 33, 0);
contaPou.depositar(10);
contaPou.sacar(10);
contaPou.sacar(1);

