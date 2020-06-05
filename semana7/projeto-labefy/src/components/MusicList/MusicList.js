import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid blue;
`;

const MusicItem = styled.div`
  height: 30px;
`;

function MusicList(props) {
  const { name, tracks, postTrack, delTrack } = props;
  const [nameInput, setName] = useState("");
  const [artistInput, setArtist] = useState("");
  const [urlInput, setUrl] = useState("");

  function addTrack() {
    const body = {
      name: nameInput,
      artist: artistInput,
      url: urlInput,
    };
    postTrack(body);
    setName("");
    setArtist("");
    setUrl("");
  }

  const renderedTracks =
    tracks &&
    tracks.map((item) => {
      return (
        <MusicItem key={item.id}>
          <span>{item.name}</span>
          <span
            onClick={() => {
              delTrack(item.id);
            }}
          >
            X
          </span>
        </MusicItem>
      );
    });

  return (
    <MainContainer>
      <h2>{name}</h2>
      <input
        placeholder="Name"
        value={nameInput}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Artist"
        value={artistInput}
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        placeholder="Url"
        value={urlInput}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button onClick={addTrack}>addTrack</button>
      {renderedTracks}
    </MainContainer>
  );
}

export default MusicList;
