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

function ListaUsuario(props) {
  const [lista, setLista] = useState([]);
  const header = { headers: { Authorization: "renan-takeshi-mello" } };

  function listarUsuario() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, header)
      .then((response) => {
        setLista(response.data);
      })
      .catch((err) => console.log(err));
  }

  function deletarUsuario(idUser) {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";
    const param = { params: { id: idUser }  };
    
    axios
      .delete(url, header, param )
      .then(r => console.log(r))
      .catch((e) => console.log(e));
  }

  useEffect(listarUsuario, []);

  const listaRenderizada = (
    <ContainerLista>
      {lista.map((item) => (
        <UsuarioP key={item.id} onClick={()=>{deletarUsuario(item.id)}} >{item.name}</UsuarioP>
      ))}
    </ContainerLista>
  );

  return listaRenderizada;
}

export default ListaUsuario;
