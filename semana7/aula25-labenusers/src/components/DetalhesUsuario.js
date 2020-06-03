import React, { useState } from "react";
import axios from "axios";
// import styled from "styled-components";

function DetalhesUsuario(props) {
  const {idUsuario, funcaoVoltar} = props;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>{idUsuario}</p>
      <button onClick={funcaoVoltar}>Voltar</button>
    </div>
  );
}

export default DetalhesUsuario;
