import React from 'react';
import styled from "styled-components";
import PlaylistSidebar from './components/PlaylistSidebar/PlaylistSidebar'
import MusicList from './components/MusicList/MusicList'

const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 3fr;
`;

function App() {
  return (
    <MainContainer>
      <PlaylistSidebar/>
      <MusicList/>
    </MainContainer>
  );
}


export default App;
