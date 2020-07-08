//LAÇOS DE REPETIÇÃO

//WHILE (enquanto)
//QUANDO USAR UM WHILE? R: quando eu não souber quantas vezes o laço irá executar

function random(min, max){  
    return Math.round(Math.random() * (max - min) + min);
}
//FUNÇÃO QUE RETORNA UM NUMERO ALEATÓRIO ENTRE 1 E 100
let i = random(1,100);

while(i !== 10){
    // console.log(i , 'Não é o 10');
    i = random(1,100);
}

//QUANDO O NUMERO ALEATÓRIO FOR 10, O LAÇO IRÁ PARAR

// console.log(i, "É o numero 10!");



//DO WHILE (faça, enquanto)
//executara ao menos uma vez, depois vereficara a condição para continuar ou parar

const istoEhFalso = false;


do{
    console.log('isto sera mostrado ao menos uma vez')

} while(istoEhFalso);


