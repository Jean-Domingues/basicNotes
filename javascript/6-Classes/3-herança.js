//Herança dentro de classes js
//Filho herda de pai, nunca o contrário

//CLASSE PAI
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

//CLASSE FILHA
/*
Contem tudo da classe mãe, porém, pode conter coisas a mais
ou mudar o que já existe
*/
class Engenheiro extends Pessoa{ //estende da classe "Pessoa", ou seja, herda de 'Pessoa'
    constructor(nome, sobrenome, crea){
        //caso venha utilizar o construtor na minha classe filha, necessário 
        // chamar os atributos da classe pai primeiro
        super(nome, sobrenome),
        this.crea = crea
    }
    //é possivel alterar metodos já criados, pois, primeiro o objeto sempre
    // irá procurar o metodo em si mesmo e depois no seu pai
    get falaCrea(){
        return this.crea
    }
}

const jean = new Engenheiro('jean', 'domingues', 123456)
console.log(jean.falaCrea)