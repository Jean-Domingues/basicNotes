/* 
//1 VAR PODE SER REDECLARADO COM O MESMO NOME
var nome = 'jean';
var nome = 'jean domingues';

LET NÃO 
let nome = 'jean';
 let nome (apresentara um erro)

 
//2 LET TEM ESCOPO DE BLOCO, VAR TEM ESCOPO DE FUNÇÃO
let idade = 19;

if(verdade){
    let idade = 19; //esta variavel nao sofre influencia da outra variavel idade

    if(verdadeira){
        let nome = 19; //esta tbm, nao sofre influencia das anteriores, e dentro deste bloco 
                        // ela sera prioridade
    }
}


//3 HOISTING, ELEVA A DECLARAÇÃO DE FUNÇÕES E DE VAR

//com funções
minhaFuncao(); //consegue acessar a função mesmo tendo sido declarada depois, pois o JS faz
o hoisting da declaração.

function minhaFuncao(){} //só ocorre com funções criadas desta maneira

//com var
console.log(meuValor); //não da erro, pois há o hoisting, porem o valor será undefined, 
                        //pq ele eleva somente a declaração, não a atribuição
                        //com let irá apresentar erro, pois não ocorre a elevação 
var meuValor = 1;
*/