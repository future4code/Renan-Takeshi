import React from "react";
import { Container } from './Etapa1'


class PerguntaAberta extends React.Component {
    state = {
        valorInput: "",
    }

    onChangeInput = (event) => {
        this.setState({ valorInput: event.target.value });
    };

    render() {
        return (
            <Container>
                <p>{this.props.pergunta}</p>
                <input value={this.state.valorInput} onChange={this.onChangeInput} />
            </Container>
        )
    }
}

export default PerguntaAberta;