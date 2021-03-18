
//COMO CRIAR OBJETOS 
let pessoa = {
    nome: 'jean' , idade: 19, peso: 76,

    falarOi(){
        console.log('oi');
    }
};

//ACESSANDO OBJETOS
console.log(pessoa.idade); //saida = 19 
console.log(pessoa['idade']);
ou
const chave = 'idade';
console.log(pessoa[chave])


//FUNÇÃO PARA CRIAR OBJETOS
function pessoa (nome , idade, peso){
    return {
        nome:nome , idade:idade, peso:peso
    }
}
//pode ser escrita tambem assim
function pessoa (nome , idade, peso){
    return {  nome, idade, peso }
}
let jean = pessoa('jean', 18, 76);
console.log(jean)


const pessoa1 = {
    nome: 'jean', sobrenome:'Domingues', idade: 19,

    falaIdade(){
        console.log(`Ola meu nome é ${this.nome} tenho ${this.idade} anos`)
    },
    //comando this, quando dentro do objeto, se refere ao próprio objeto
    envelhece(){
        this.idade++;
    }
}
pessoa1.falaIdade();
pessoa1.envelhece();
pessoa1.falaIdade()