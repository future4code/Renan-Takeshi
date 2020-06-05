import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  height: 34px;
`;

const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  border: 1px solid black;
  margin-top:5px;
`;

const Name = styled.span`
  cursor: pointer;
  padding-left: 5px;
`;

const DelButton = styled.span`
  color: red;
  cursor: pointer;
  padding-right: 5px;
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
