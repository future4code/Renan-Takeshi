import React, { useState } from "react";
import {
  MainContainer,
  InputGrid,
  Table,
  Song,
  Artist,
  Track,
  Add,
} from "./styled";
import axios from "axios";

function SpotifySearch(props) {
  const { token, postTrack } = props;
  const [searchInput, setSearch] = useState("");
  const [tracks, setTracks] = useState();

  const headersSearchSpotify = {    headers: {
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
      <Song />
      <Artist />
      <Add />
      <thead>
        <tr>
          <th>Músicas</th>
          <th>Artistas</th>
        </tr>
      </thead>
      {tracks.map((track) => {
        return (
          <Track key={track.id}>
            <td>{track.name}</td>
            <td>
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
    </Table>
  );

  return (
    <MainContainer>
      <hr />
      <InputGrid>
        <input
          placeholder="Pesquisar faixas/artistas no Spotify"
          value={searchInput}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchSpotify}>Pesquisar</button>
      </InputGrid>
      {renderedTracks}
    </MainContainer>
  );
}

export default SpotifySearch;
