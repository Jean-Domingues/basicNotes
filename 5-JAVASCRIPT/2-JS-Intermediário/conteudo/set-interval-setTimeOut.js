//PARA PARAR UM INTERVALO DIGITE F9(vs code)


//SET INTERVAL
//Seta um intervalo de tempo para uma função ser executada de tempos em tempos
//SINTAXE 
/*
setInterval(nomeDaFunção(), timerEmMileSegundos);
setInterval(function(){ ..... }, timerEmMileSegundos);
const timer = setInterval(function(){ ..... }, timerEmMileSegundos); //utilizada em conjunto com setTimeout
*/
const timer = setInterval(function(){
    console.log("oi")  //irá printar oi, a cada um segundo
}, 1000)


//SET TIME OUT
//sintaxe
/*
setTimeout(funçãoNomeada(), tempoParaComeçarExecutar);
setTimeout(function (){ ... }, tempoParaComeçarExecutar);
*/

//setTimeout (seta um tempo, para que a função possa ser executada pela primeira vez)
setTimeout(function (){ clearInterval(timer)}, 10000);
//depois de 10 segundos a função timer será pausada