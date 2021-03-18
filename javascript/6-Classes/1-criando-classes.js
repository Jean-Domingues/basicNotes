//criando classes em javascript
/*
Tem a mesma funcionalidade de funções construtoras (são quase identicas)
Uma classe é um molde para criar objetos, que serão instancias dela
*/
//Exemplo 

class Pessoa {
    constructor(nome, idade) { 
        //metodo utilizado para receber parametros e construir o objeto
        this.nome = nome,
        this.idade = idade
    }
    //Ao contrario de funções, as classes já hospedam automaticamente 
    // no prototype do objeto, os metodos criados, portando "fala()" já está
    // no prototype do objeto, não precisando atribuir isto manualmente 

    fala() {
        console.log(`${this.nome} esta falando`)
    }
}
const pessoa1 = new Pessoa('jean', 19)
console.log(pessoa1)