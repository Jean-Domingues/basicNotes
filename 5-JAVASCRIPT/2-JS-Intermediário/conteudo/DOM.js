//ADICIONANDO UM ESCUTADOS GERAL

document.addEventListener('click', function (evento){
    console.log(evento.target) //adiciona um escutador do evento 'click' no documento inteiro
    //parametro 'evento' representa o evento
    //evento.target, representa o elemento que foi clicado, seja <p>, <div>, etc...
})

//COMANDO FOCUS
//é um evento que foca o cursor do mouse em um input
const umInput; //supondo que seja um
umInput.focus();

//COMANDO CLASSLIST
const elemento;
elemento.classList.add('umaClasse');    //add uma classe a um elemento
elemento.classList.remove('umaClasse');    //remove a classe 'umaClasse' (PROCURAR A DOCUMENTAÇÃO)

//COMANDO SETATRIBUTE
const caixa;
caixa.setAtribute('class', 'umaClasse'); //seta um atributo classe, com o valor 'umaClasse'
//elemento.setAtribute('oQueEuQueroAdd', 'valorDoQueEuAdd);


//COMANDO ADDEVENTLISTENER
//adiciona um escutador de eventos, no elemento que eu selecionar
document.addEventListener('click', function(evento){    //o parametro é o evento em si
    const el = evento.target; //pega o elemento em que o evento aconteceu
})
//sintaxe: elemento.addEventListener('tipoDeEvento', funcaoQueDeveExecutarOuCriar());