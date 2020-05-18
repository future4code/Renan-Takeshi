import React from "react";
import styled from 'styled-components';

const Pergunta = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`

class PerguntaAberta extends React.Component {
    state = {
        valorInput: "",
    }

    onChangeInput = (event) => {
        this.setState({ valorInput: event.target.value });
    };

    render() {
        return (
            <Pergunta>
                <p>{this.props.pergunta}</p>
                <input value={this.state.valorInput} onChange={this.onChangeInput} />
            </Pergunta>
        )
    }
}

export default PerguntaAberta;