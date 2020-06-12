import React, { useState } from "react";
import {
  MainContainer,
  InputGrid,
  Table,
  Song,
  Album,
  Artist,
  Track,
  Add,
} from "./styled";
import axios from "axios";

function SpotifySearch(props) {
  const { token, postTrack } = props;
  const [searchInput, setSearch] = useState("");
  const [tracks, setTracks] = useState();

  const headersSearchSpotify = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };
  const urlSearchSpotify = "https://api.spotify.com/v1/search";

  async function searchSpotify() {
    try {
      const response = await axios.get(
        urlSearchSpotify + `?q=${searchInput}&type=track&market=BR`,
        headersSearchSpotify
      );
      setTracks(response.data.tracks.items);
    } catch (err) {
      setTracks();
      console.log(err);
    }
  }

  function clearSearch() {
    setTracks();
    setSearch("");
  }

  function addTrack(track) {
    const body = {
      name: track.name,
      artist: track.artists.map((item) => item.name).join(", "),
      url: track.external_urls.spotify,
    };
    postTrack(body);
  }

  const renderedTracks = tracks && (
    <Table>
      <colgroup>
        <Song />
        <Album />
        <Artist />
        <Add />
      </colgroup>
      <thead>
        <tr>
          <th>Música</th>
          <th>Album</th>
          <th>Artista</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => {
          return (
            <Track key={track.id}>
              <td style={{ wordWrap: "break-word" }}>{track.name}</td>
              <td style={{ wordWrap: "break-word" }}>{track.album.name}</td>
              <td style={{ wordWrap: "break-word" }}>
                {track.artists.map((item, idx, arr) =>
                  idx === arr.length - 1 ? item.name : `${item.name}, `
                )}
              </td>
              <td
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => {
                  addTrack(track);
                }}
              >
                Adicionar
              </td>
            </Track>
          );
        })}
      </tbody>
    </Table>
  );

  return (
    <MainContainer>
      <hr />
      <InputGrid>
        <input
          style={{ fontSize: "16px" }}
          placeholder="Pesquisar faixas/artistas no Spotify"
          value={searchInput}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchSpotify}>Pesquisar</button>
        <button onClick={clearSearch}>Limpar</button>
      </InputGrid>
      {renderedTracks}
    </MainContainer>
  );
}

export default SpotifySearch;
