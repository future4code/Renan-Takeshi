import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function ListaUsuario(props) {
  const [lista, setLista] = useState([]);

  function listarUsuario() {
    const header = { headers: { Authorization: "renan-takeshi-mello" } };
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, header)
      .then((response) => {
        setLista(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(listarUsuario, []);

  return lista.map((item) => <p>{item.name}</p>);
}

export default ListaUsuario;
