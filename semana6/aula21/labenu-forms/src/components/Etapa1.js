import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`


class Etapa1 extends React.Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </Container>
    );
  }
}

export default Etapa1;