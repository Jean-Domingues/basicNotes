/*
FUNÇÕES EM JAVASCRIPT
SINTAXE 1:   
             function nomeDaFuncao(parametro1, parametro2){
                    expressão 1 .....
                    expressão 2....
                    return parametro1+parametro2
                }
                chamando a função : nomeDaFuncao(valor1, valor2);

SINTAXE 2:  FUNÇÃO ANÔNIMA

            let somaNumeros = function (n1,n2) {
                return n1+n2
            };          //necessario terminar com ponto e vírgula
            
            chamando a função: somaNumeros(3,4);

SINTAXE 3: ARROW FUNCTION

            let soma = (n1, n2) => {
                return n1+n2
            }

            SINTAXE SIMPLIFICADA: utilizada para funções simples
            let soma = (n1,n2) => n1+n2
            let raiz = n => n**0.5



//NOMENCLATURA 
function nomenclatura (parametro){
}
nomenclatura(argumento)
*/



let soma = (n1,n2) => n1+n2
let raiz = n => n**0.5
console.log(soma(2,3))
console.log(raiz(9))