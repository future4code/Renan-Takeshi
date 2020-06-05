import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  background: red;
`;

const Playlist = styled.div`
  width: 100%;
  background: blue;
`;

function PlaylistSidebar(props) {
  return (
    <MainContainer>
      <Playlist>oi</Playlist>
      <Playlist>td</Playlist>
      <Playlist>bem</Playlist>
    </MainContainer>
  );
}

export default PlaylistSidebar;
