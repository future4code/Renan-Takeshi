import React from "react";
import { useHistory } from "react-router-dom";
import useRequestTrips from "../hooks/useRequestTrips";
import TripActionCard from "../TripActionCard";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main } from "../styles";
import { Button } from "./styles";

const ListTripsPage = () => {
  const history = useHistory();
  const trips = useRequestTrips();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const renderedTrips =
    trips &&
    trips.map((item) => (
      <TripActionCard key={item.id} trip={item} isLoggedIn={isLoggedIn} />
    ));

  return (
    <Body>
      <Header />
      <Main>
        {isLoggedIn && (
          <Button
            onClick={() => {
              history.push("/trips/create");
            }}
          >
            Create New Trip
          </Button>
        )}
        {renderedTrips}
        <Button onClick={() => history.push("/")}>Go to Home</Button>{" "}
      </Main>
      <Footer />
    </Body>
  );
};

export default ListTripsPage;
