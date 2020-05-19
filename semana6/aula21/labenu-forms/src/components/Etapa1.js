import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";
import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const Botao = styled.button`
  margin-top: 20px;
`

class Etapa1 extends React.Component {
  state = {
    nome: "",
    nomeErro: "",
    idade: "",
    idadeErro: "",
    email: "",
    emailErro: "",
    erro: true,
  }

  validarEtapa = () => {
    if (!this.validarTexto(this.state.email)) {
      this.setState({ emailErro: "Preencha seu email", erro: true })
    } else {
      this.setState({ emailErro: "", erro: false })
    }
  }

  prosseguir = () => {
    this.validarEtapa();
    setTimeout(() => {
      if (this.state.erro) {
        alert("Você deve preencher seu email antes de continuar")
      } else {
        this.props.avancarEtapa();
      }
    }, 1)
  }

  setNome = (nome) => { this.setState({ nome: nome }) }
  setIdade = (idade) => { this.setState({ idade: idade }) }
  setEmail = (email) => { this.setState({ email: email }) }

  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta setValue={this.setNome} msgErro={this.state.nomeErro} pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta setValue={this.setIdade} msgErro={this.state.idadeErro} pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta setValue={this.setEmail} msgErro={this.state.emailErro} pergunta={"3. Qual seu email? (OBRIGATÓRIO)"} />
        <PerguntaOpcoes
          vaiEtapaDois={this.props.vaiEtapaDois}
          vaiEtapaTres={this.props.vaiEtapaTres}
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
        <Botao onClick={this.prosseguir}>Prosseguir</Botao>
      </Container>
    );
  }

  validarTexto = (texto) => {
    if (texto.replace(/ /g, "").length !== 0) {
      return true
    }
    return false
  }

}

export default Etapa1;