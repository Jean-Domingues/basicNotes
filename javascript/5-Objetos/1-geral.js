//REVISÃO GERAL DE OBJETOS
//objeto literal
const objetoLit = { //literal pois é declarado literalmente
    chave: 'valor'
} 
//acessando os valores do objeto 
console.log(objetoLit.chave)
console.log(objetoLit['chave']) //as duas maneiras funcionam, porém neste caso é possivel acessar chaves
// dinamicamente

/************************************************************* */

//Criando objetos por função construtora
const objFuncao = new Object();
objFuncao.nome = 'jean'
// console.log(objFuncao.nome) //Saída: jean

/******************************************************** */

//Apagando uma chave de um objeto com DELETE
const vouApagar = {
    apagado: 'jean',
    nome: 'jean'
}
delete vouApagar.apagado

/******************************************************** */

//FUNÇÕES COSTRUTORAS

function Pessoa(nome, idade){
    this.nome = nome;   //seria a mesma coisa que: p1.nome = nome
    this.idade = idade;

    //está implicito: return this;
}
         // {} <- this 
const p1  = new Pessoa('jean', 19) //A palavra new, cria um novo objeto e faz this, apontar para 
// ele, e depois retorna este objeto para quem o chamou, no caso quem criou (const)

/******************************************************** */

//Congelando os valores e chaves do meu objeto FREZZE
//TAMBEM FUNCIONA COM ARRAYS 
const gelo = {
    nome:'jean'
}
Object.freeze(gelo);
gelo.idade = 19;
gelo.nome = 'oto nome';
//console.log(gelo) //Saída: {nome: 'jean'}
