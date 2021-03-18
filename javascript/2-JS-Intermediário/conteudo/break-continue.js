//UTILIZADO EM LAÇOS DE REPETIÇÃO 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for(let i of numeros){
    if( i === 3){
        console.log('Não quero este numero');
        continue;   //quebra a execução do for, e pula para o próximo valor de i, no caso 4
    }
    if(i === 10){
        console.log('Só quero ir até o numero 10')
        break; //para a execução do for 
    }
    console.log(i);
}