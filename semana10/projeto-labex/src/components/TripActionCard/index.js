import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Name,
  Planet,
  Description,
  Date,
  Duration,
  Button,
} from "./styles";

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
    <Card>
      <Name>{trip.name}</Name>
      <Planet>{trip.planet}</Planet>
      <Description>{trip.description}</Description>
      <Date>{trip.date}</Date>
      <Duration>{`${trip.durationInDays} days`}</Duration>
      <Button onClick={handleButtonClick}>
        {isLoggedIn ? "Details" : "Apply"}
      </Button>
    </Card>
  ) : null;
};

export default TripActionCard;
