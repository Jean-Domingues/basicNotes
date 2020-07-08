//VOCE ENCONTRARA NESTE EXERCICIO COMO:
//setar atributos, criar elementos, atribuir classes a estes elementos
//apagar 'pais' de elementos, evento de pressionar teclas, focar o cursor em um campo
//trocar palavras com replace, excluir espaços de uma string com trim()

const inpuTarefa = document.querySelector('#input-tarefa');
const botaoTarefa = document.querySelector('#btn-tarefa');
const tarefas = document.querySelector('#tarefas');

inpuTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){   //verifica se a tecla pressionada foi a de codigo 13, que é o enter
        if(!inpuTarefa.value)   return;
        adicionaTarefa(inpuTarefa.value);
    }
})

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botao = document.createElement('button');
    botao.innerText = 'X';
    botao.setAttribute('class', 'apagar');
    botao.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botao);
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inpuTarefa.value = '';
    inpuTarefa.focus();
}

function adicionaTarefa(texto){
    const li = criaLi();
    li.innerText = texto;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

botaoTarefa.addEventListener('click', function (){
    if(!inpuTarefa.value)   return;
    adicionaTarefa(inpuTarefa.value);
})

document.addEventListener('click', function (e){
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const minhasTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of minhasTarefas){
        listaDeTarefas.push(tarefa.innerText.replace('X', '').trim());
        //envia o texto contido em cada li, sem o botão, e sem espaços no final
        //para o meu array
    }
    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas));
}

function recarregaTarefas(){
    const tarefasSalvas = localStorage.getItem('tarefas'); //pegando o item que estava na memória
    //do browser e guardando-o em uma constante
    const listaTarefas = JSON.parse(tarefasSalvas);   //convertendo o JSON da const para array
    for(let tarefa of listaTarefas){
        adicionaTarefa(tarefa);
    }
}
recarregaTarefas();


/*
const texto = "meu nome é jean   ";
console.log(texto);
console.log(texto.trim()); //removera os espaços em branco no final da string
*/