//Uma função callback é uma função passada a outra função como argumento, 
// que é então invocado dentro da função pai para completar algum tipo de rotina ou ação.

// callbacks são geralmente utilizados quando não se sabe ao certo o tempo de execução de uma tarefa
function cumprimento(name) {
    alert('Hello ' + name);
  }
  
function processoDeInputUser(callback) {
    let name = prompt('Por favor insira o seu nome');
    callback(name); //quando o user terminar de digitar seu nome será chamado a função 
    // de callback que imprimira 'hello + nomeDoUsuario'
  }
  
  processoDeInputUser(cumprimento);

  /*................................................*/

  //ESTUDAR MAIS SOBRE CALLBACK DEPOIS