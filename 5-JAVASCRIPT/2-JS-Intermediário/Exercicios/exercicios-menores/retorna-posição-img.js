//ESCREVA UMA FUNÇÃO QUE RECEBE DOIS ARGUMENTOS, TAMANHO E LARGURA DE 
// UMA IMAGEM, E QUE RETORNE TRUE SE ELA ESTIVER NO MODO PAISAGEM 

//PRIMEIRO MODO 
function ePaisagem(altura, largura){
    if(largura > altura){
        return true;
    }
    return false;
}

//SEGUNDO MODO
const ePaisagem2 = (alt, larg) => larg > alt;
console.log(ePaisagem(300,400));
console.log(ePaisagem2(400, 100));