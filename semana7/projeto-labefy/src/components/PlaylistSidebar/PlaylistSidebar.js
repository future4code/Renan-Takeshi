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

const Name = styled.span`
  cursor: pointer;
`

const DelButton = styled.span`
  color: red;
  cursor: pointer;
`;

function PlaylistSidebar(props) {
  const { playlists, getTracks, delPlaylist, postPlaylist } = props;
  const [nameInput, setName] = useState("");

  const renderedList =
    playlists &&
    playlists.map((item) => {
      return (
        <PlaylistItem key={item.id}>
          <Name
            onClick={() => {
              getTracks(item.id, item.name);
            }}
          >
            {item.name}
          </Name>
          <DelButton
            onClick={() => {
              delPlaylist(item.id);
            }}
          >
            {" X"}
          </DelButton>
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
      <button onClick={addPlaylist}>Criar</button>
      {renderedList}
    </MainContainer>
  );
}

export default PlaylistSidebar;
