//BLOCO FINALLY 

try{
    //se nao houver erros executara este bloco
}catch(e){
    //se houver erros executara este bloco
}finally{
    //sempre executara este bloco
}

//POSSO TER BLOCOS DE TRY E CATH ANINHADOS
try{
    ////
    try{
        //////
    }catch(e){
        /////
    }finally{
        //////
    }
}catch(e){
}finally{
}

//EXEMPLO DE UTILIZAÇAO

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw TypeError('Esperando instancia de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try{
    const data = new Date();
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratando erro
    console.log(e);
}finally{
    //sempre será executado
    console.log("Bom dia canguru da perna curta")
}

