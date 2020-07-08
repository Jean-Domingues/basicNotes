import React, {Component} from 'react'

//COMPONENT STATEFULL
/*
    Components statefull, são componentes que contem estado, 
    geralmente são classes que herdam de component. Como nossa classe
    não irá retornar apenas um jsx sem nenhuma alteração, precisamos de um
    método para renderizar as alterações na tela, que seria o metodo RENDER

    Toda vez que um component mudar de estado, o método render será chamado novamente
    e as alterações feitas no mesmo, serão executadas em tempo real.
*/

export default class Main extends Component{
    render(){
        <h1>Este elemento será renderizado</h1>
    }
}