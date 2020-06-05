import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid blue;
`;

const MusicItem = styled.div`
  height: 30px;
`;

function MusicList(props) {
  const { tracks, postTrack, playlistId } = props;
  const [nameInput, setName] = useState("");
  const [artistInput, setArtist] = useState("");
  const [urlInput, setUrl] = useState("");

  function addTrack() {
    const body = {
      name: nameInput,
      artist: artistInput,
      url: urlInput,
    };
    postTrack(playlistId, body);
  }

  const renderedTracks =
    tracks &&
    tracks.map((item) => {
      return <MusicItem key={item.id}>{item.name}</MusicItem>;
    });

  return (
    <MainContainer>
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
