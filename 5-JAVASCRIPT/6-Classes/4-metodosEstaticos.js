//METODOS DE INSTANCIA E METODOS ESTATICOS 

//Metodos estaticos são metodos que nós podemos acessar sem instanciar a classe
//e tambem não podem ser acessados pelas instancias, além de serem também
// mais performaticos do que metodos de instancias

class Matematico {
    constructor(nome, experiencia){
        this.nome = nome,
        this.experiencia = experiencia
    }

    //metodos de instancia, serao usados por instancias desta classe
    // ou seja, objetos
    subtrai(x,y){
    return x-y 
    }

    //metodos estaticos, serao usados pela própria classe,
    // sem precisar do objeto (nao tem acesso aos atributos do objeto)
    // o this aqui se refere a própria classe não a instancias dela
    static soma(x,y){
        return x+y
    }
}

const newton = new Matematico('isac' , 40)
console.log(newton.subtrai(3,2)) // 1 
// console.log(newton.soma(1,2)) //erro
console.log(Matematico.soma(1,2)) // 3