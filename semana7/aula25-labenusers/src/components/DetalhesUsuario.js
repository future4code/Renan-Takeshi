import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";

function DetalhesUsuario(props) {
  const { idUsuario, funcaoVoltar, funcaoDeletar, header, url } = props;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [modoEditar, setModoEditar] = useState(false);

  async function buscarUsuario() {
    try {
      const response = await axios.get(url + `/${idUsuario}`, header);
      setNome(response.data.name);
      setEmail(response.data.email);
    } catch (err) {
      console.log(err);
      window.alert("Erro ao deletar usuario");
    }
  }

  async function editarUsuario() {
    try {
      await axios.put(
        url + `/${idUsuario}`,
        { name: nome, email: email },
        header
      );
      setModoEditar(false);
      window.alert("Usuario editado com sucesso");
    } catch (err) {
      console.log(err);
      window.alert("Erro ao editar usuario");
    }
  }

  function prepararParaEditar() {
    return (
      <div>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={editarUsuario}>Salvar</button>
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {buscarUsuario()}, []);

  return nome ? (
    <div>
      <p>
        Nome: {nome} - Email: {email}
      </p>
      <button onClick={funcaoVoltar}>Voltar</button>
      <button onClick={funcaoDeletar}>Deletar</button>
      {modoEditar || (
        <button onClick={() => setModoEditar(true)}>Editar</button>
      )}
      {modoEditar && prepararParaEditar()}
    </div>
  ) : (
    <p>Aguarde...</p>
  );
}

export default DetalhesUsuario;
