const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
   
    if(!peso && !altura){
        return mostraResultado('Preencha corretamente os campos', false)
    }
    if(!peso || peso >200 || peso < 1){
        return mostraResultado('Peso inválido, ou fora do estipulado', false);
    }
    if(!altura || altura > 3 || altura < 0){
        return mostraResultado('Altura inválida, ou fora do estipulado', false);
    }
    const imc = getImc(peso, altura);
    return mostraResultado(`O seu imc é ${imc}`, true)
});


function getImc(peso, altura){
    return  (peso/(altura*altura)).toFixed(2);
}


function criaP(){
    const p = document.createElement('p');  //cria o elemento p, que é um parágrafo
    return p;

}

function mostraResultado(msg, valido){
    const result = document.querySelector('div#resultado');
    result.innerHTML = '';
   const p = criaP();
   if(valido){
       p.classList.add('informacoes-validas')
   }else{
       p.classList.add('informacoes-invalidas')
   }
   p.innerHTML = msg;
   result.appendChild(p);

}


 /*
    const p = document.createElement('p');  //cria o elemento p, que é um parágrafo
    p.classList.add('paragrafo-resultado'); //adiciona uma classe ao elemento criado
    p.innerHTML = 'Vai toma no cu bahia';   //adiciona um texto no elemento p
    result.appendChild(p);      //acresenta o elemento p no resultado
    */