import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhesUsuario from "./DetalhesUsuario";


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
  const [idUsuario, setIdUsuario] = useState(0);

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
          listarUsuario();
          window.alert(
            "Usuario deletado com sucesso\nAguarde a lista ser atualizada"
          );
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
        <UsuarioP key={item.id} onClick={()=>{setIdUsuario(item.id)}}>
          {item.name}
          <span
            onClick={() => {
              deletarUsuario(item.id);
            }}
          >
            X
          </span>
        </UsuarioP>
      ))}
    </ContainerLista>
  );

  const detalhesUsuario = <DetalhesUsuario idUsuario={idUsuario} funcaoVoltar={()=>setIdUsuario(0)}/>

  return (idUsuario ? detalhesUsuario : listaRenderizada);
}

export default ListaUsuario;
