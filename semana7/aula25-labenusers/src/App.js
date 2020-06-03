import React, { useState } from "react";
import styled from "styled-components";
import CadastroUsuario from "./components/CadastroUsuario";
import ListaUsuario from "./components/ListaUsuario";

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Botao = styled.button`
  width: 150px;
  margin: 10px;
`;

function App() {
  const [tela, setTela] = useState("cadastro");

  switch (tela) {
    case "cadastro":
      return (
        <ContainerApp>
          <Botao
            onClick={() => {
              setTela("lista");
            }}
          >
            Ir para lista
          </Botao>
          <CadastroUsuario />
        </ContainerApp>
      );
    case "lista":
      return (
        <ContainerApp>
          <Botao
            onClick={() => {
              setTela("cadastro");
            }}
          >
            Ir para cadastro
          </Botao>
          <ListaUsuario />
        </ContainerApp>
      );
    default:
      break;
  }
}

export default App;
