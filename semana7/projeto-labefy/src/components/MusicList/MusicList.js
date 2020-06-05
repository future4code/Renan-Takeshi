import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid blue;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3) 50px;
  grid-auto-flow: column;
`;

const MusicItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  grid-auto-flow: column;
  height: 30px;
`;

const Track = styled.audio`
  height: 30px;
  margin-left: 50px;
`;

const Header = styled.h2`
  text-align: center;
  text-decoration: underline;
`;

function MusicList(props) {
  const { name, tracks, postTrack, delTrack } = props;
  const [nameInput, setName] = useState("");
  const [artistInput, setArtist] = useState("");
  const [urlInput, setUrl] = useState("");

  function addTrack() {
    const trackUrl = `http://spoti4.future4.com.br/${Math.floor(Math.random()*100)}.mp3`
    const body = {
      name: nameInput,
      artist: artistInput,
      url: trackUrl,
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
          <span>{item.name}{" - "}{item.artist}</span>
          <Track controls>
            <source
              src={item.url}
              type="audio/mpeg"
            />
          </Track>
          <button
            onClick={() => {
              delTrack(item.id);
            }}
          >
            Remover
          </button>
        </MusicItem>
      );
    });

  return (
    <MainContainer>
      <Header>{name}</Header>
      <InputGrid>
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
        <button onClick={addTrack}>Adicionar</button>
      </InputGrid>
      {renderedTracks}
    </MainContainer>
  );
}

export default MusicList;
