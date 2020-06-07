import React, { useState } from "react";
import {
  MainContainer,
  Header,
  InputGrid,
  Audio,
  Track,
  Song,
  Artist,
  Table,
  Control,
  Remove,
} from "./styled";
import SpotifySearch from "../SpotifySearch/SpotifySearch";
import Iframe from "react-iframe";

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

  const renderedTracks = tracks && (
    <Table>
      <Song />
      <Artist />
      <Control />
      <Remove />
      <thead>
        <tr>
          <th>Song</th>
          <th>Artists</th>
        </tr>
      </thead>
      {tracks.map((item) => {
        return (
          <Track key={item.id}>
            <td style={{ wordWrap: "break-word" }}>{item.name}</td>
            <td style={{ wordWrap: "break-word" }}>{item.artist}</td>
            <td>
              {item.url.toLowerCase().includes("spotify") ? (
                <Iframe
                  url={item.url.replace(/track/g, "embed/track")}
                  width="250px"
                  height="80px"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              ) : (
                <Audio controls>
                  <source src={item.url} type="audio/mpeg" />
                </Audio>
              )}
            </td>
            <td
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => {
                delTrack(item.id);
              }}
            >
              Remover
            </td>
          </Track>
        );
      })}
    </Table>
  );

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
