import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const PlaylistItem = styled.div`
  height: 30px;
  border: 1px solid black;
`;

function PlaylistSidebar(props) {
  const { playlists, getTracks } = props;

  const renderedList =
    playlists &&
    playlists.map((item) => {
      return (
        <PlaylistItem key={item.id}>
          <span
            onClick={() => {
              getTracks(item.id);
            }}
          >
            {item.name}
          </span>
          <span> X</span>
        </PlaylistItem>
      );
    });

  return <MainContainer>{renderedList}</MainContainer>;
}

export default PlaylistSidebar;
