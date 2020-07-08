function escopoFuncao(){
const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function meuTimer(segundos){
    const data = new Date(0 + segundos*1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'UTC'});
}

//MANEIRA MAIS INTELIGENTE DE FAZER
document.addEventListener('click', function (evento){
    const element = evento.target;
    if(element.classList.contains('iniciar')){  //acessa as classe do meu elemento clicado
      
        clearInterval(timer);
        relogio.style.color = 'black';
        timer = setInterval(function (){
             segundos++;
             relogio.innerHTML = meuTimer(segundos);
         }, 1000)

    }else if(element.classList.contains('pausar')){

        clearInterval(timer);
         relogio.style.color = 'red';

    }else if(element.classList.contains('zerar')){

        relogio.style.color = 'black';
        relogio.innerHTML = meuTimer(0);
        segundos = 0;

    }
})
}
escopoFuncao();

/*
document.addEventListener('click', function (evento){
    console.log(evento.target) //adiciona um escutador do evento 'click' no documento inteiro
    //parametro 'e' representa o evento
})
*/


//MANEIRA MENOS ESCALAVEL DE SE FAZER
/*
 iniciar.addEventListener('click', function(){
    clearInterval(timer);
    relogio.style.color = 'black';
    timer = setInterval(function (){
         segundos++;
         relogio.innerHTML = meuTimer(segundos);
     }, 1000)
 })

 pausar.addEventListener('click', function(){
     clearInterval(timer);
     relogio.style.color = 'red';
 })

 zerar.addEventListener('click', function(){
     relogio.style.color = 'black';
     relogio.innerHTML = meuTimer(0);
     segundos = 0;
 })
*/