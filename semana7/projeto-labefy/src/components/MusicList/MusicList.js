import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid blue;
`;

const MusicItem = styled.div`
  height: 30px;
`;

function MusicList(props) {
  const { tracks } = props;

  const renderedTracks =
    tracks &&
    tracks.map((item) => {
      return <MusicItem key={item.id}>{item.name}</MusicItem>;
    });

  return <MainContainer>{renderedTracks}</MainContainer>;
}

export default MusicList;
