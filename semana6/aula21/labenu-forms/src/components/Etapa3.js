import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";
import { Container, Botao } from './Etapa1'


class Etapa3 extends React.Component {
    render() {
        return (
            <Container>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <PerguntaOpcoes
                    pergunta={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        "Nenhum",
                        "Curso técnico",
                        "Curso de inglês",
                    ]}
                />
                <Botao onClick={() => { this.props.avancarEtapa() }}>Finalizar</Botao>
            </Container>
        );
    }
}

export default Etapa3;