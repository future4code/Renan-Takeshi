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
  const { playlistName, tracks, postTrack, delTrack, token } = props;
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
      <colgroup>
        <Song />
        <Artist />
        <Control />
        <Remove />
      </colgroup>
      <thead>
        <tr>
          <th>Música</th>
          <th>Artista</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => {
          return (
            <Track key={track.id}>
              <td style={{ wordWrap: "break-word" }}>{track.name}</td>
              <td style={{ wordWrap: "break-word" }}>{track.artist}</td>
              <td>
                {track.url.toLowerCase().includes("spotify") ? (
                  <Iframe
                    url={track.url.replace(/track/g, "embed/track")}
                    width="250px"
                    height="80px"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                ) : (
                  <Audio controls>
                    <source src={track.url} type="audio/mpeg" />
                  </Audio>
                )}
              </td>
              <td
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => {
                  delTrack(track.id);
                }}
              >
                Remover
              </td>
            </Track>
          );
        })}
      </tbody>
    </Table>
  );

  return (
    <MainContainer>
      <Header>{playlistName}</Header>
      <InputGrid>
        <input
          style={{ fontSize: "16px" }}
          placeholder="Name"
          value={nameInput}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          style={{ fontSize: "16px" }}
          placeholder="Artist"
          value={artistInput}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <input
          style={{ fontSize: "16px" }}
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
