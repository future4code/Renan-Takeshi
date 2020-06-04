import React from "react";
import { Container } from './Etapa1'


class PerguntaOpcoes extends React.Component {

    onChangeSelect = (event) => {
        if (event.target.value === "1" || event.target.value === "2") {
            this.props.vaiEtapaTres();
        } else {
            this.props.vaiEtapaDois();
        }
    };

    render() {
        let valor = 0;
        return (
            <Container>
                <p>{this.props.pergunta}</p>
                <select onChange={this.onChangeSelect}>
                    {this.props.opcoes.map(opcao => {
                        valor++;
                        return <option key={valor} value={valor}>{opcao}</option>
                    })}
                </select>
            </Container>
        )
    }
}

export default PerguntaOpcoes;