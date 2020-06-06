import React, { useState } from "react";
import { MainContainer, Header, InputGrid, MusicItem, Track } from "./styled";
import SpotifySearch from "../SpotifySearch/SpotifySearch";

function MusicList(props) {
  const { name, tracks, postTrack, delTrack, token } = props;
  const [nameInput, setName] = useState("");
  const [artistInput, setArtist] = useState("");
  const [urlInput, setUrl] = useState("");

  function addTrack() {
    const trackUrl = `http://spoti4.future4.com.br/${Math.ceil(
      Math.random() * 100
    )}.mp3`;
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
          <span>
            {item.name} ({item.artist})
          </span>
          <Track controls>
            <source src={item.url} type="audio/mpeg" />
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
      <SpotifySearch token={token} postTrack={postTrack} />
    </MainContainer>
  );
}

export default MusicList;
