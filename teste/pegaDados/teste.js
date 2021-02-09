let nome;
let lastName = 'senhor';

function cliqueiNobotao(open) {
  open? document.getElementById('modal').style.display = 'flex' :
  document.getElementById('modal').style.display = 'none'
}

function gravaNome(campo){
  if(campo.code === 'Enter'){
    return exibeNome()
  }

  nome = campo.target.value;
  lastName = nome.split(' ')[1]
}

function exibeNome(){
  alert(`Olá Sr.${lastName}, como vai você?`)
  cliqueiNobotao(false)
}