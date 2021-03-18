/*
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();  //sempre que eu utilizo this, neste caso, dentro deste objeto criado,
      // estou me referindo ao objeto em si, desde que, não faça outra chamada com outro elemento
      // dentro deste objeto, utilizando funções literais, salvo arrow functions, ou funções com
      // .bind() no final
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
    document.addEventListener('click', e => { //como há uma outra chamada ao this dessa vez pelo
        // document, o this mudara para ele, porém quando utilizamos arrow function
        // o nosso  this permanece o mesmo, ou seja, permanece igual ao que era antes
        // o que se refere ao objeto
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    }, //para que o this permaneça o mesmo dentro de outras funções, colocamos no final da função
    // quando fechamos as chaves, um '}.bind(this)', assim ele tambem utilizara o this como
    // o objeto
    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

function Calculadora(){
  const display = document.querySelector('.display');

  this.inicia = ()=>{
    this.capturaCliques();
    this.pressionaEnter();
  }

  this.pressionaEnter = () => {
    display.addEventListener('keypress', e => {
      if(e.keyCode === 13){
        this.realizaConta();
      }
    })
  }

  this.capturaCliques = ()=>{
    document.addEventListener('click', event =>{
      const element = event.target;
     
      if(element.classList.contains('btn-num')) this.addNumDisplay(element);
      if(element.classList.contains('btn-clear')) this.clear();
      if(element.classList.contains('btn-del')) this.del();
      if(element.classList.contains('btn-eq')) this.realizaConta();
    })
  }

  this.realizaConta = () => {
    let conta = display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    }
    
  this.del = () => display.value = display.value.slice(0, -1);

  this.clear = () => display.value = '';

  this.addNumDisplay = element =>{
   display.value += element.innerText; 
   display.focus();
  }
}
const calculadora = new Calculadora();
calculadora.inicia();

/*  Refazendo utilizando funções construtoras

*/