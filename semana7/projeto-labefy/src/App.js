import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylistSidebar from "./components/PlaylistSidebar/PlaylistSidebar";
import MusicList from "./components/MusicList/MusicList";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Header = styled.h2`
  text-align: center;
`

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = { headers: { Authorization: "renan-takeshi-mello" } };

function App() {
  const [playlists, setPlaylists] = useState();
  const [playlistId, setPlaylistId] = useState();
  const [playlistName, setPlaylistName] = useState();
  const [tracks, setTracks] = useState();

  async function getAllPlaylists() {
    try {
      const response = await axios.get(url, headers);
      setPlaylists(response.data.result.list);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPlaylistTracks(id, name) {
    try {
      const response = await axios.get(url + `/${id}/tracks`, headers);
      setTracks(response.data.result.tracks);
      setPlaylistId(id);
      setPlaylistName(name);
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePlaylist(id) {
    if (window.confirm("Deseja mesmo deletar a playlist ?")) {
      try {
        await axios.delete(url + `/${id}`, headers);
        (id === playlistId && setTracks())
        getAllPlaylists();
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function createPlaylist(playlistName) {
    try {
      await axios.post(url, { name: playlistName }, headers);
      getAllPlaylists();
    } catch (err) {
      console.log(err);
    }
  }

  async function addTrackToPlaylist(body) {
    try {
      await axios.post(url + `/${playlistId}/tracks`, body, headers);
      getPlaylistTracks(playlistId, playlistName);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeTrackFromPlaylist(trackId) {
    if (window.confirm("Deseja mesmo deletar a faixa ?")) {
      try {
        await axios.delete(url + `/${playlistId}/tracks/${trackId}`, headers);
        getPlaylistTracks(playlistId, playlistName);
      } catch (err) {
        console.log(err);
      }
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
          name={playlistName}
          tracks={tracks}
          postTrack={addTrackToPlaylist}
          delTrack={removeTrackFromPlaylist}
        />
      ) : (
        <Header>Selecione uma playlist</Header>
      )}
    </MainContainer>
  );
}

export default App;
