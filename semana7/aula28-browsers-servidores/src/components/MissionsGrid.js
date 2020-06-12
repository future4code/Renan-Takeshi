import React from "react";
import styled from "styled-components";
import MissionCard from "./MissionCard";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
`;

function MissionsGrid(props) {
  const { missions, setMission } = props;

  return (
    <MainContainer>
      {missions.map((item) => (
        <MissionCard
          key={item.mission_id}
          mission={item}
          imgSrc={`https://picsum.photos/200/160?a=${item.mission_id}`}
          setMission={() => {
            setMission(item.mission_id);
          }}
        />
      ))}
    </MainContainer>
  );
}

export default MissionsGrid;
