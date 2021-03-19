export class MyComponent {

// Executa assim que o meu componente é montado
// - Executa somente uma vez
componentDidMount(){}

// Executa sempre que o meu componente for atualizado
// - Pode receber parâmetros
componentDidUpdate(prevProps, prevState, snapshot){}

// Executa quando o meu componente vai ser desmontado
componentWillUnmount(){}

}