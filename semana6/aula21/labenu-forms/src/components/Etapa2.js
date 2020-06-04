import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import { Container, Botao } from './Etapa1'


class Etapa2 extends React.Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
        <Botao onClick={() => { this.props.avancarEtapa() }}>Finalizar</Botao>
      </Container>
    );
  }
}


export default Etapa2;