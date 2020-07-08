//NODE LIST, RETORNA UM ARRAY COM NÓS DENTRO DELE, INDEXADOS, NESTE CASO RETORNA OS NÓS DE <p>
// QUE ESTÃO CONTIDOS DENTRO DE UMA DIV


const paragrafos = document.querySelector(".paragrafos"); //SELECIONA A NOSSA DIV, ONDE ESTÃO OS PARAGRAFOS
const ps  = paragrafos.querySelectorAll('p'); //PEGA TODOS OS PARAGRAFOS, E ATRIBUI A UM NODE LIST
const estilosBody = getComputedStyle(document.body);  //PEGA TODO O STYLE COMPUTADO EM BODY
const backgroudBody =  estilosBody.backgroundColor;   //ATRIBUI A COR DE BACKGROUND DE BODY, A UMA VAR

for(let i of ps){
    i.style.background = backgroudBody;
    i.style.color = 'white';
}