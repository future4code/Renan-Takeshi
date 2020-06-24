import React from "react";
import styled from "styled-components";

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
  const isLogged = localStorage.getItem("token");
  return (
    <MainContainer>
      <Name>{trip.name}</Name>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
      <Button>{isLogged ? "Details" : "Apply"}</Button>
    </MainContainer>
  );
};

export default TripCard;
