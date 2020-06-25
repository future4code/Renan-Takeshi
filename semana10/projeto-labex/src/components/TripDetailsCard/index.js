import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 5fr;
  grid-template-areas:
    "name name name desc"
    "pnet date days desc";
`;

const Name = styled.div`
  grid-area: name;
`;

const Planet = styled.div`
  grid-area: pnet;
`;

const Description = styled.div`
  grid-area: desc;
`;
const Date = styled.div`
  grid-area: date;
`;
const Duration = styled.div`
  grid-area: days;
`;

const TripDetailsCard = (props) => {
  const { trip } = props;

  return trip ? (
    <MainContainer>
      <Name>{trip.name}</Name>
      <Planet>{trip.planet}</Planet>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
    </MainContainer>
  ) : null;
};

export default TripDetailsCard;
