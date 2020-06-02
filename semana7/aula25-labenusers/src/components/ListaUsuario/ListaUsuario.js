import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const UsuarioP = styled.p`
  margin: 0;
`;

function ListaUsuario() {
  const [lista, setLista] = useState([]);

  const header = { headers: { Authorization: "renan-takeshi-mello" } };
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  function listarUsuario() {
    axios
      .get(url, header)
      .then((response) => {
        console.log(response);
        setLista(response.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert("Erro ao listar usuarios");
      });
  }

  function deletarUsuario(idUser) {
    if (window.confirm("Tem certeza que de que deseja deletar ?")) {
      axios
        .delete(url + `/${idUser}`, header)
        .then((response) => {
          console.log(response);
          window.alert("Usuario deletado com sucesso\nAguarde a lista ser atualizada");
          listarUsuario();
        })
        .catch((err) => {
          console.log(err);
          window.alert("Erro ao deletar usuario");
        });
    } else {
      window.alert("Operacao Cancelada");
    }
  }

  useEffect(listarUsuario, []);

  const listaRenderizada = (
    <ContainerLista>
      {lista.map((item) => (
        <UsuarioP
          key={item.id}
          onClick={() => {
            deletarUsuario(item.id);
          }}
        >
          {item.name}
        </UsuarioP>
      ))}
    </ContainerLista>
  );

  return listaRenderizada;
}

export default ListaUsuario;
