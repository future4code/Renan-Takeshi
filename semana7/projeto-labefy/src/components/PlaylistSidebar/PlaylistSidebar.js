import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const PlaylistItem = styled.div`
  height: 30px;
  border: 1px solid black;
`;

function PlaylistSidebar(props) {
  const { playlists, getTracks, delPlaylist, postPlaylist } = props;
  const [nameInput, setName] = useState("");

  const renderedList =
    playlists &&
    playlists.map((item) => {
      return (
        <PlaylistItem key={item.id}>
          <span
            onClick={() => {
              getTracks(item.id, item.name);
            }}
          >
            {item.name}
          </span>
          <span
            onClick={() => {
              delPlaylist(item.id);
            }}
          >
            {" "}
            X
          </span>
        </PlaylistItem>
      );
    });

  function addPlaylist() {
    postPlaylist(nameInput);
    setName("");
  }

  return (
    <MainContainer>
      <input
        placeholder="Name"
        value={nameInput}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={addPlaylist}
      >
        Criar
      </button>
      {renderedList}
    </MainContainer>
  );
}

export default PlaylistSidebar;
