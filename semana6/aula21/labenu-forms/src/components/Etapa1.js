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
    email: "",
    emailErro: "",
    erro: true,
  }

  validarTexto = (texto) => {
    if (texto.replace(/ /g, "").length !== 0) {
      return true
    }
    return false
  }

  validarEtapa = () => {
    const nomeValido = this.validarTexto(this.state.nome);
    const emailValido = this.validarTexto(this.state.email);

    if (!nomeValido && !emailValido) {
      this.setState({
        nomeErro: "Preencha seu nome",
        emailErro: "Preencha seu email",
        erro: true,
      })
    } else if (!nomeValido) {
      this.setState({
        nomeErro: "Preencha seu nome",
        emailErro: "",
        erro: true,
      })
    } else if (!emailValido) {
      this.setState({
        nomeErro: "",
        emailErro: "Preencha seu email",
        erro: true,
      })
    } else {
      this.setState({
        nomeErro: "",
        emailErro: "",
        erro: false,
      })
    }
  }

  prosseguir = () => {
    this.validarEtapa();
    setTimeout(() => {
      if (this.state.erro) {
        alert("Você deve preencher todos os campos antes de continuar")
      } else {
        this.props.avancarEtapa();
      }
    }, 1)
  }

  // Funções passadas como props
  setNome = (nome) => { this.setState({ nome: nome }) }
  setIdade = (idade) => { this.setState({ idade: idade }) }
  setEmail = (email) => { this.setState({ email: email }) }

  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta setValue={this.setNome} msgErro={this.state.nomeErro} pergunta={"1. Qual o seu nome? (OBRIGATÓRIO)"} />
        <PerguntaAberta setValue={this.setIdade} pergunta={"2. Qual sua idade?"} />
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
}

export default Etapa1;