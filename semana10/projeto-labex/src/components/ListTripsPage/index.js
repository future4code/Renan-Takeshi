import React from "react";
import { useHistory } from "react-router-dom";
import useRequestTrips from "../hooks/useRequestTrips";
import TripActionCard from "../TripActionCard";
const ListTripsPage = () => {
  const history = useHistory();
  const trips = useRequestTrips();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const renderedTrips =
    trips && trips.map((item) => <TripActionCard key={item.id} trip={item} isLoggedIn={isLoggedIn}/>);

  return (
    <div>
      <h3>TripsList</h3>
      {isLoggedIn && (
        <button
          onClick={() => {
            history.push("/trips/create");
          }}
        >
          Create New Trip
        </button>
      )}
      {renderedTrips}
    </div>
  );
};

export default ListTripsPage;
