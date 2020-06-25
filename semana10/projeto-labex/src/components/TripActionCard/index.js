import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr 1fr;
  grid-template-areas:
    "name name name desc but"
    "pnet date days desc but";
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

const Button = styled.button`
  grid-area: but;
`;

const TripActionCard = (props) => {
  const { trip, isLoggedIn } = props;
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(
      isLoggedIn
        ? `/trips/details/${trip.id}`
        : `/trips/application-form/${trip.id}`
    );
  };
  return trip ? (
    <MainContainer>
      <Name>{trip.name}</Name>
      <Planet>{trip.planet}</Planet>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
      <Button onClick={handleButtonClick}>
        {isLoggedIn ? "Details" : "Apply"}
      </Button>
    </MainContainer>
  ) : null;
};

export default TripActionCard;
