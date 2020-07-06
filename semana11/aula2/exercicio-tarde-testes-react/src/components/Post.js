import React from "react";

export const Post = props => {
  return (
    <div className={"post-container"}>
      <p>{props.post.text}</p>
      <button
        onClick={() => props.toggleLike(props.post.id)}
        data-testid={"like-button"}
      >
        {props.post.liked ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.deletePost(props.post.id)}>Apagar</button>
    </div>
  );
};
