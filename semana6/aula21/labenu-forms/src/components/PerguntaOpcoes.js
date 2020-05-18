import React from "react";
import styled from 'styled-components';

const Pergunta = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`

class PerguntaOpcoes extends React.Component {
    state = {
        valorSelect: "",
    }

    onChangeSelect = (event) => {
        this.setState({ valorSelect: event.target.value });
        console.log(event.target.value)
    };

    render() {
        let valor = 0;
        return (
            <Pergunta>
                <p>{this.props.pergunta}</p>
                <select >
                    {this.props.opcoes.map(opcao => {
                        valor++;
                        return <option key={valor} value={valor}>{opcao}</option>
                    })}
                </select>
            </Pergunta>
        )
    }
}

export default PerguntaOpcoes;