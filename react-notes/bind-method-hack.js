// Para evitar ter que fazer o bind do state, dentro de um class component, podemos
//  usar o seguinte hack

export class OldComponentWithBind {
  constructor(props) {
    super(props);
    this.state = {
      name: "jean",
    };

    // Bind do nosso método
    this.handleGetName = this.handleGetName.bind(this);
  }

  handleSetName = () => {
    // Como arrowFunctions não tem this próprio, nós não precisamos fazer o bind
    this.setState({ name: "Jean Domingues" });
  };

  handleGetName() {
    // caso não seja feito o bind deste metódo, a próxima linha irá dar erro
    alert(this.state.name);
  }

  render() {
    return "aqui vai meu componente";
  }
}

export class NewComponentWithoutBind {
  // Tem o mesmo funcionamento, pois utiliza da funcionalidade do JS
  //   JAVASCRIPT CLASS FIELDS

  state = {
    name: "jean",
  };

  handleSetName() {
    // Como arrowFunctions não tem this próprio, nós não precisamos fazer o bind
    this.setState({ name: "Jean Domingues" });
  }

  handleGetName() {
    // caso não seja feito o bind deste metódo, a próxima linha irá dar erro
    alert(this.state.name);
  }

  render() {
    return "aqui vai meu componente";
  }
}
