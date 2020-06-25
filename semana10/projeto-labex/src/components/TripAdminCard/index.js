import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr 1fr;
  grid-template-areas:
    "name   name name description button"
    "planet date days description button";
`;

const Name = styled.div`
  grid-area: name;
`;

const Planet = styled.div`
  grid-area: planet;
`;

const Description = styled.div`
  grid-area: description;
`;
const Date = styled.div`
  grid-area: date;
`;
const Duration = styled.div`
  grid-area: days;
`;

const Button = styled.button`
  grid-area: button;
`;

const TripActionCard = (props) => {
  const { trip } = props;
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(`/trips/details/${trip.id}`);
  };
  
  return trip ? (
    <MainContainer>
      <Name>{trip.name}</Name>
      <Planet>{trip.planet}</Planet>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
      <Button onClick={handleButtonClick}>Details</Button>
    </MainContainer>
  ) : null;
};

export default TripActionCard;
