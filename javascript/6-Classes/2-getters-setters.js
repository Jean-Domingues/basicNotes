//Getters e Setters dentro de classes 
/*
Getter obtem o valor da propriedade, sendo apenas um atibuto que será chamado
Setter atribui um valor a propriedade, sendo chamado pelo "nome + ="

*/
//Symbol
/**
 O Symbol é como se fosse um token que será diferente a cada criação, o 
 parametro passado serve como se fosse uma propriedade de indentificação,
 como o "Alt" em uma img HTML
 */
 
 let jean = Symbol('jean')

 const meuObj = {
     nome: 'jean',
     idade: 19,
     jean: 8
 }

 //CLASSE COM GETTERS E SETTERS
 class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
  
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
  }
  
  const p1 = new Pessoa('jean', 'domingues');
  p1.nomeCompleto = 'jean domingues Pinto';
 