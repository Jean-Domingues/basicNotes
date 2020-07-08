import React from 'react'

//MEU PRIMEIRO COMPONENTE REACT
/*
  Componentes que não contem estado são chamados de components Stateles,
  que geralmente são funções simples que não estendem de component, como 
  as classes que iremos ver mais a frente
*/
export default  function(){
  return (
    //retornando dentro de uma tag vazia (FRAGMENT </>)
    <> 
    <h1>Regras do return de uma função!</h1>
    <p>
      Quando um componente retornar mais de uma linha, será
      necessário adicionar parentesses na expressão
      
    </p>
    <p>
      Uma função só pode retornar uma tag por vez, para isso 
      geralmente retornamos tudo dentro de uma div, ou uma tag vazia
      como este...
    </p>
    </>
  )
}