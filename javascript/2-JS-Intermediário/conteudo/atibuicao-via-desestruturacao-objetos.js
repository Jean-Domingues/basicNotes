//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO, OBJETOS
const objeto = {
    nome: 'Jean', 
    idade: 19,
    sexo: 'M',
    endereco: {
        rua:'Antonio Nunes',
        bairro: 'Palmeiras'
    }
}
//const {nome='', idade} = objeto //cria duas constantes e atribui os valores contidos no objeto;
//observe que nome está setado com valor padrão, caso não ache valor algum.

//caso não queira atribuir a uma variavel com o mesmo nome do atributo do objeto, façamos assim
const {sexo: genero} = objeto; //atribui a 'genero', o valor de sexo

const {endereco: { rua: lugar, bairro: local}, endereco} = objeto; //entra dentro do objeto, que está dentro de um objeto
//e atribui os valores de 'rua' e 'bairro' à 'lugar' e 'local'
//e tambem atribui o objeto "endereco" a "endereco"

//OPERADOR REST
const {nome, ...resto} =  objeto; //joga o resto dos valores de "objeto" em "resto"
console.log(resto);
