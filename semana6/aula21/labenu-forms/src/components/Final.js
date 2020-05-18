import React from "react";
import styled from 'styled-components';

const Pergunta = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`

class Final extends React.Component {
    render() {
        return (
            <Pergunta>
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Pergunta>
        )
    }
}

export default Final;