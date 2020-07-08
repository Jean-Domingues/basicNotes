import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            novaTarefa: '',
        }

        this.inputChange = this.inputChange.bind(this)
        }

    inputChange(e) {
        this.setState({
            novaTarefa: e.target.value,
        })
    }

    render() {
        const tarefa = this.state.novaTarefa
        return (
            <div>
                <h1>{tarefa}</h1>
                <form action="#">
                    <input onChange={this.inputChange} type="text" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}