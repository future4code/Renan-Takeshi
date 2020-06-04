import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


class App extends React.Component {
  state = {
    idx: 0,
    proximaEtapa: 2, //Porque o valor default do select é ensino médio
    etapas: [<Etapa1 avancarEtapa={() => { this.avancarEtapa() }} vaiEtapaDois={() => { this.vaiEtapaDois() }} vaiEtapaTres={() => { this.vaiEtapaTres() }} />,
             <Etapa2 avancarEtapa={() => { this.avancarEtapa() }} />,
             <Etapa3 avancarEtapa={() => { this.avancarEtapa() }} />,
             <Final />],
  }

  avancarEtapa = () => {
    this.setState({ idx: this.state.proximaEtapa, proximaEtapa: 3 })
  }

  vaiEtapaDois = () => {
    this.setState({ proximaEtapa: 1 })
  }

  vaiEtapaTres = () => {
    this.setState({ proximaEtapa: 2 })
  }

  render() {
    return (
      <div>
        {this.state.etapas[this.state.idx]}
      </div>
    );
  }
}
// Teste
export default App;
