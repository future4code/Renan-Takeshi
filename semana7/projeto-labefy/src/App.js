import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylistSidebar from "./components/PlaylistSidebar/PlaylistSidebar";
import MusicList from "./components/MusicList/MusicList";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = { headers: { Authorization: "renan-takeshi-mello" } };

function App() {
  const [playlists, setPlaylists] = useState();
  const [tracks, setTracks] = useState();
  const [playlistId, setId] = useState();

  async function getAllPlaylists() {
    try {
      const response = await axios.get(url, headers);
      setPlaylists(response.data.result.list);
      console.table(response.data.result.list);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPlaylistTracks(id) {
    try {
      const response = await axios.get(url + `/${id}/tracks`, headers);
      setTracks(response.data.result.tracks);
      setId(id);
      console.table(response.data.result.tracks);
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePlaylist(id) {
    if (window.confirm("Deseja mesmo deletar a playlist ?")) {
      try {
        const response = await axios.delete(url + `/${id}`, headers);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function createPlaylist(playlistName) {
    try {
      const response = await axios.post(url, { name: playlistName }, headers);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function addTrackToPlaylist(playlistId, body) {
    try {
      const response = await axios.post(
        url + `/${playlistId}/tracks`,
        body,
        headers
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPlaylists();
  }, []);

  return (
    <MainContainer>
      <PlaylistSidebar
        playlists={playlists}
        getTracks={getPlaylistTracks}
        delPlaylist={deletePlaylist}
        postPlaylist={createPlaylist}
      />
      {tracks ? (
        <MusicList
          tracks={tracks}
          postTrack={addTrackToPlaylist}
          playlistId={playlistId}
        />
      ) : (
        <p>Selecione uma playlist</p>
      )}
    </MainContainer>
  );
}

export default App;
