import React, { useState } from "react";
import {
  MainContainer,
  InputGrid,
  PlaylistItem,
  Name,
  DelButton,
} from "./styled";

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
            {"X"}
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
      <InputGrid>
        <input
          placeholder="Criar nova playlist..."
          value={nameInput}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={addPlaylist}>Criar</button>
      </InputGrid>
      {renderedList}
    </MainContainer>
  );
}

export default PlaylistSidebar;
