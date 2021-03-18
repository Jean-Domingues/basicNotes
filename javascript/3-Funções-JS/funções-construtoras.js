//Funções construtoras retornam objetos assim como funções fábricas
//Funções construtoras começam com a primeira letra maiuscula: Pessoa(new)
//SINTAXE
function Pessoa(nome, sobrenome){
    //atriubutos ou métodos privados
    const funcaoReservada = ()=>{
        console.log("Não estou disponivel para o objeto")
    }

    //atriubutos ou métodos públicos
    this.nome = nome;           //cria as chaves e já atribui os valores
    this.sobrenome = sobrenome;
    //não preciso dividir por virgulas
    this.metodo = ()=>{ 
        console.log('ola mundo');
    }
}
const p1 = new Pessoa('jean', 'Domingues');
//A palavra new cria o objeto para nós e já faz o this apontar para ela, e implicitamente
// faz as chaves criadas serem retornadas para o nosso objeto que está sendo criado
p1.metodo();