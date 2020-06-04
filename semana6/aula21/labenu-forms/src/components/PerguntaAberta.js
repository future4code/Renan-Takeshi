import React from "react";
import { Container } from './Etapa1'
import styled from 'styled-components';

const Erro = styled.p`
    color: red;
    margin-bottom: 0px;
`

class PerguntaAberta extends React.Component {
    state = {
        valorInput: "",
    }

    onChangeInput = (event) => {
        this.props.setValue(event.target.value)
        this.setState({ valorInput: event.target.value });
    };

    render() {
        return (
            <Container>
                <Erro>{this.props.msgErro}</Erro>
                <p>{this.props.pergunta}</p>
                <input value={this.state.valorInput} onChange={this.onChangeInput} />
            </Container>
        )
    }
}

export default PerguntaAberta;