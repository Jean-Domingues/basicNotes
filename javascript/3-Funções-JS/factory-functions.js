//Factory functions (funções fábricas)

//ENTENDENDO A PALAVRA THIS
/*
this se refere a quem chamou ele naquele contexto, nesse caso quando dizemos
"this.peso", estamos se referindo ao próprio objeto, ou seja, seria o mesmo que falar
'p1.peso', porém como não sabemos quem estará chamando o método em determinados momentos,
ou podera ser chamado por mais de uma função, usamo this, que se refere a quem está
utilizando o metodo naquele momento
*/
function criaPessoa(nome, sobrenome, peso, altura) {   //exemplo de função fábrica
    return {
        nome,
        sobrenome,
        peso,
        altura,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter, seta valores, pesquisar depois
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala() {
            return `${nome} esta falando seu peso, ${this.peso}`; //ou ${p1.peso}, neste caso
            //necessário utilizar this para acessar a chave peso do objeto, pois dentro da função 
            // fala ele não foi declarado
        },
        //Getter, utilizado quando só se obtem o valor
        get imc() { //"get", transforma o metodo em um atributo, não precisando executa-lo
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    }
}
const p1 = criaPessoa('jean', 'Pinto', 76, 1.8);
p1.nomeCompleto = 'jean aparecido pinto domingues';
console.log(p1.sobrenome)   //saida = aparecido pinto domingues
