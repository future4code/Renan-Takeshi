import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

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
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    
    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts, valorInputUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: "" });
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
        <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuário"}
          />
                    <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>

        {listaDePosts}
      </div>
    );
  }
}

export default App;
