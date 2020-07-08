//object.defineProperty() e object.defineProperties()

//Seta a visibilidade de uma chave de um objeto, ou ainda, se é possivel
// altera-la ou não(mexer ou não)
// PARAMETROS: (objeto, 'chave')

//Parecido com o "Object.freeze(obj)", porém com muito mais controle

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        value: estoque,  //Define um valor
        enumerable: false, //mostra a chave
        writable: true,     //pode alterar o valor
        configurable: false  //pode reconfigurar (definir novamente as propriedades)
        // ou modificar as chaves
    })


    /******************************************************** */

    Object.defineProperties(this, { //define mais de uma chave
        nome: {
            value: nome,
            enumerable: true,
            writable: false,
            configurable: false
        },
        preco: {
            value: preco,
            enumerable: true,
            writable: false,
            configurable: false
        }
    })
}

const sabao = new Produto('sabao', 2, 5);

delete sabao.estoque //não irá apagar pois o "configurable" foi definido
// como "false"

console.log(Object.keys(sabao)) //Caso "enumerable" seja "false"
// não ira mostrar a chave estoque

console.log(sabao)