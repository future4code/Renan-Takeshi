import React from "react";
import {
  Card,
  Name,
  Planet,
  Description,
  Date,
  Duration,
} from "./styles";

const TripDetailsCard = (props) => {
  const { trip } = props;

  return trip ? (
    <Card>
      <Name>{trip.name}</Name>
      <Planet>{trip.planet}</Planet>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
    </Card>
  ) : null;
};

export default TripDetailsCard;
