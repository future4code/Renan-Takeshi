import React from 'react';
import './App.css';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from 'styled-components';

const MainLayout = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Botao = styled.button`
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    idx: 0,
    etapas: [<Etapa1 />, <Etapa2 />, <Etapa3 />, <Final />],
  }

  avancarEtapa = () => {
    this.setState({ idx: this.state.idx + 1 })
  }

  render() {
    return (
      <MainLayout>
        {this.state.etapas[this.state.idx]}
        {this.state.idx < 3 && <Botao onClick={this.avancarEtapa}>Próxima etapa</Botao>}
      </MainLayout>
    );
  }
}

export default App;
