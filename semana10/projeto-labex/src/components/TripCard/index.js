import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "name name desc desc desc but"
    "date days desc desc desc but";
`;

const Name = styled.div`
  grid-area: name;
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

const TripCard = (props) => {
  const { trip } = props;
  const history = useHistory();
  const isLogged = localStorage.getItem("token");

  const handleButtonClick = () => {
    history.push(
      isLogged
        ? `/trips/details/${trip.id}`
        : `/trips/application-form/${trip.id}`
    );
  };
  return trip ? (
    <MainContainer>
      <Name>{trip.name}</Name>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
      <Button onClick={handleButtonClick}>
        {isLogged ? "Details" : "Apply"}
      </Button>
    </MainContainer>
  ) : null;
};

export default TripCard;
