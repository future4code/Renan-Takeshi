import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    if(event.target.value !== ""){
      setShowAlert(false)
    }
  };

  const addPost = (event) => {
    event.preventDefault();
    const isValid = inputValue.replace(/\s/g, "").length ? true : false;
    setShowAlert(!isValid);
    // Adiciona um post à lista
    if (isValid) {
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false,
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      setInputValue("");
    }
  };

  const deletePost = (postId) => {
    // Apaga um post da lista
    const newPostsList = postsList.filter((post) => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = (postId) => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map((post) => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked,
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  const renderedPosts = (
    <div>
      <p>Quantidade de posts: {postsList.length}</p>
      {postsList.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <form onSubmit={addPost}>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
          data-testid={"input"}
        />
        <button>Adicionar</button>
      </form>
      <br />
      {showAlert && <p style={{color:"red"}}>Show some creativity</p>}
      {postsList.length ? renderedPosts : <p>Nenhum post</p>}
    </div>
  );
};

export default App;
