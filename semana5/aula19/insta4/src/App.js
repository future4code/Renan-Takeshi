import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const FormInput = styled.input`
  margin-top: 5px;
  padding-left: 5px;
  height: 25px;
`;
const FormButton = styled.button`
  height: 25px;
  margin-top: 5px
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nome: "Batman",
        fotoUsuario:
          "https://c7.uihere.com/files/579/761/149/batman-arkham-asylum-joker-harley-quinn-lego-batman-batman-thumb.jpg",
        fotoPost:
          "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5492733_png/batmobile-swarovski-5492733.png",
      },
      {
        nome: "Robin",
        fotoUsuario:
          "https://img.favpng.com/1/11/22/batman-nightwing-robin-youtube-lego-png-favpng-nPK8DVQgz23HbHnt3cDVVVpcj.jpg",
        fotoPost:
          "https://s2.glbimg.com/KiQCUZ25mcJU_k6rxfKvahh4faw=/695x0/s.glbimg.com/po/tt2/f/original/2015/05/14/robin-101.jpg",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = (event) => {
    event.preventDefault();
    const novoPost = {
      nome: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div className={"app-container"}>
        <FormPost>
          <FormInput
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do usuário"}
          />
          <FormInput
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto do usuário"}
          />
          <FormInput
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da foto do post"}
          />
          <FormButton onClick={this.adicionaPost}>Adicionar</FormButton>
        </FormPost>

        {listaDePosts}
      </div>
    );
  }
}

export default App;
