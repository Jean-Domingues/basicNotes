/*
Sintaxe do switch:
switch (variavel a ser analisada){
    case valorQueEuQuero: 
            instrução 
    break;

    case valor2:
        instrução 2
    break;

    default:
}
*/

//EXEMPLO DE UTILIZAÇÃO 

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


const data = new Date('2020-01-05 21:20:10');
const diaSemana = data.getDay();

console.log(retornaDiaDaSemana(diaSemana))