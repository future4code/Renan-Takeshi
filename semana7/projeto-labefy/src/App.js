import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaylistSidebar from "./components/PlaylistSidebar/PlaylistSidebar";
import MusicList from "./components/MusicList/MusicList";
import { MainContainer, Header } from "./styled";
import qs from "querystring";

const urlTokenSpotify = "https://accounts.spotify.com/api/token";
const bodySpotify = { grant_type: "client_credentials" };
const headersTokenSpotify = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: "73f01c670ed349f399db684c6a0a3e05",
    password: "dad56bdf9ebb40958fab09f06c10acb1",
  },
};

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = { headers: { Authorization: "renan-takeshi-mello" } };

function App() {
  const [playlists, setPlaylists] = useState();
  const [playlistId, setPlaylistId] = useState();
  const [playlistName, setPlaylistName] = useState();
  const [tracks, setTracks] = useState();
  const [token, setToken] = useState();

  async function getSpotifyToken() {
    try {
      const response = await axios.post(
        urlTokenSpotify,
        qs.stringify(bodySpotify),
        headersTokenSpotify
      );
      setToken(response.data.access_token);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSpotifyToken();
  }, []);

  async function getAllPlaylists() {
    try {
      const response = await axios.get(url, headers);
      setPlaylists(response.data.result.list);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllPlaylists();
  }, []);

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
        id === playlistId && setTracks(); // Checa se a playlist excluida estava selecionada
        getAllPlaylists();
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function createPlaylist(name) {
    try {
      await axios.post(url, { name: name }, headers);
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
          playlistName={playlistName}
          tracks={tracks}
          postTrack={addTrackToPlaylist}
          delTrack={removeTrackFromPlaylist}
          token={token}
        />
      ) : (
        <Header>Selecione uma playlist</Header>
      )}
    </MainContainer>
  );
}

export default App;
