import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 5px 0px 5px 5px;
`;

const Botao = styled.button`
  margin-top: auto;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
`;

const Link = styled.a`
  padding-left: 5px;
  color:black;
  margin-top:5px;
`;

const Name = styled.p`
  padding-left: 5px;
`;

function MissionCard(props) {
  const { mission, imgSrc, setMission } = props;

  return (
    <CardContainer>
      <Name>
        <b>Name:</b> {mission.mission_name}
      </Name>
      <img src={imgSrc}></img>
      <Link href={mission.wikipedia} target="_blank" rel="noopener noreferrer">
        Wikipedia
      </Link>
      <Link href={mission.website} target="_blank" rel="noopener noreferrer">
        Website
      </Link>
      <Botao onClick={setMission}>Description</Botao>
    </CardContainer>
  );
}

export default MissionCard;
