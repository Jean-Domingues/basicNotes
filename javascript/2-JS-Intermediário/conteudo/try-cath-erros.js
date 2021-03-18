//TRATANDO ERROS COM TRY CATH
/*

try{        //tente fazer isto
    console.log(variavelQueNaoExiste);
}catch(error){      //se der erro faça isso (parametro = erro ocorrido)
    console.log('Ocorreu algo inesperado!')
}
*/

//LANÇANDO ERROS COM THROW
function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // throw('x e y precisam ser numeros'); //LANÇO APENAS UMA STRING, NÃO UM ERRO VERDADEIRO
        throw new Error('x e y precisam ser numeros'); //LANÇA UM ERRO DE VERDADE, QUE PODE CONTER VARIOS
        //TIPOS DE ERROS, QUE INCLUSIVE, EU POSSO CRIAR, COMO POR EXEMPLO, "ERRO DE SINTAXE", "ERRO DE TIPO"
        //ReferenceError
    }
    return x+y;
}

console.log(soma(2,'1'));
