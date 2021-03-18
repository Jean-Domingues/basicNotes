function calcular(tipo, dado) {
    
    const visorTela = document.getElementById('visor');
    if(tipo === 'operador'){
        if(dado === '-' || dado === '+' || dado === '*' || dado === '/' || dado === '.'){
            visorTela.value += dado;
        }else if (dado === 'c'){
            visorTela.value = '';
        }
        else{
            let resultado = eval(visorTela.value);  //tomar muito cuidado, pois executa strings 
            // como códigos javascript
            visorTela.value = resultado;
        }

    }else{
        visorTela.value += dado;
    }
}

document.addEventListener('keypress', e =>{
    const elemento = e.target;
    if(elemento.keyCode === 13){
        
    }
})