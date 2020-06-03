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
  cursor: pointer;
`;

const BotaoDeletar = styled.span`
  color: red;
  background: yellow;
  padding-left: 5px;
  cursor: pointer;
`

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
          setIdUsuario(0);
          window.alert(
            "Usuario deletado com sucesso"
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

  async function buscarUsuario(){
    try{

    }catch(err){
      console.log(err)
    }
  }

  useEffect(listarUsuario, []);

  const listaRenderizada = (
    <ContainerLista>
      {lista.map((item) => (
        <UsuarioP
          key={item.id}
          onClick={() => {
            setIdUsuario(item.id);
          }}
        >
          {item.name}
          <BotaoDeletar
            onClick={() => {
              deletarUsuario(item.id);
            }}
          >
            X
          </BotaoDeletar>
        </UsuarioP>
      ))}
    </ContainerLista>
  );

  const detalhesUsuario = (
    <DetalhesUsuario
      idUsuario={idUsuario}
      funcaoVoltar={() => setIdUsuario(0)}
      funcaoDeletar={() => deletarUsuario(idUsuario)}
      header={header}
      url={url}
    />
  );

  return idUsuario ? detalhesUsuario : lista.length ? listaRenderizada : <p>Aguarde...</p>;
}

export default ListaUsuario;
