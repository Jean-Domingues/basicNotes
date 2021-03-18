//Metodos que serao usados por filhos de "pessoa"
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};
/********************************************************************* */
const pessoaPrototype = Object.assign({}, falar, comer, beber);
//mixing de objetos dentro de um (linkando todos os métodos em um objeto só)


/********************************************************************* */
function criaPessoa(nome, sobrenome) { //Função fábrica de pessoas
  return Object.create(pessoaPrototype, { //linkando nosso objeto com métodos 
    // para o objeto retornado pela factory function
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio'); 
// os dois objetos tem acesso ao mesmo prototype agora
const p2 = criaPessoa('Maria', 'A.');
