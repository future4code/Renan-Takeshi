import React, {useState} from 'react';
import styled from "styled-components";
import CadastroUsuario from "./components/CadastroUsuario/CadastroUsuario";
import ListaUsuario from "./components/ListaUsuario/ListaUsuario";

function App() {

  const [tela, setTela] = useState('cadastro')

    switch(tela){
      case 'cadastro':
        return <CadastroUsuario/>
        break
      case 'lista':
        return <ListaUsuario/>
        break
      default:
        break
    }
  
}

export default App;
