//PRIMEIRO JEITO DE FAZER 
/*
const dataAtual = new Date();
const diaSemana = retornaDiaDaSemana(dataAtual.getDay());
const diaAtual =  dataAtual.getDate();
const mesAno = retornaMes(dataAtual.getMonth());
const horaAtual = dataAtual.getHours();
const minutosAtual = dataAtual.getMinutes();
const ano = dataAtual.getFullYear();

function retornaDiaDaSemana(diaSemana){
    switch (diaSemana){
        case 0:
            return 'Domingo'
        case 1: 
             return 'Segunda-feira'
        case 2: 
             return 'Terça-feira'
        case 3: 
            return 'Quarta-feira'
        case 4: 
             return 'Quinta-feira'
        case 5: 
             return 'Sexta-feira'
        case 6: 
             return 'Sábado'
    }
}
function retornaMes(mes){
    switch (mes){
        case 0:
            return 'janeiro'
        case 1: 
             return 'Fevereiro'
        case 2: 
             return 'Março'
        case 3: 
            return 'Abril'
        case 4: 
             return 'Maio'
        case 5: 
             return 'Junho'
        case 6: 
             return 'Julho'
        case 7: 
             return 'Agosto'
        case 8: 
             return 'Setembro'
        case 9: 
            return 'Outubro'
        case 10: 
             return 'Novembro'
        case 11: 
             return 'Dezembro'
        default: 
             return ''
    }
}

const titulo = document.querySelector('h1');
titulo.innerHTML = `${diaSemana}, ${diaAtual} de ${mesAno} de ${ano} ${horaAtual}:${minutosAtual}`

//SEGUNDA MANEIRA DE FAZER, COM 3 LINHAS DE CÓDIGO

const titulo = document.querySelector('.container h1');
const data = new Date();
titulo.innerHTML = data.toLocaleDateString('pt-bt', {dateStyle:'full', timeStyle:'short'});
*/


//TERCEIRA FORMA DE FAZER

const dataAtual = new Date();
const diaSemana = retornaDiaDaSemana(dataAtual.getDay());
const diaAtual =  dataAtual.getDate();
const mesAno = retornaMes(dataAtual.getMonth());
const horaAtual = dataAtual.getHours();
const minutosAtual = dataAtual.getMinutes();
const ano = dataAtual.getFullYear();

function retornaDiaDaSemana(diaSemana){
    const diasDaSemana = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
    'Sexta-feira', 'Sábado'    
]
    return diasDaSemana[diaSemana];
}

function retornaMes(mes){
    const mesDoAno = [
        'janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
        'outubro','novembro', 'dezembro'
    ]
    return mesDoAno[mes];
}


const titulo = document.querySelector('h1');
titulo.innerHTML = `${diaSemana}, ${diaAtual} de ${mesAno} de ${ano} ${horaAtual}:${minutosAtual}`