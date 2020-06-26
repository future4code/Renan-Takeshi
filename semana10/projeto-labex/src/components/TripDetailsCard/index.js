import React from "react";
import {
  MainContainer,
  Name,
  Planet,
  Description,
  Date,
  Duration,
} from "./styles";

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
