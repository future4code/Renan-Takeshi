import React from "react";
import { useHistory } from "react-router-dom";
import useRequestTrips from "../hooks/useRequestTrips";
import TripCard from "../TripCard";
const ListTripsPage = () => {
  const history = useHistory();
  const trips = useRequestTrips();

  const renderedTrips = trips && trips.map((item) => <TripCard key={item.id} trip={item} />);

  return (
    <div>
      <h2>TripsList</h2>
      {renderedTrips}
      <button
        onClick={() => {
          history.push("/trips/create");
        }}
      >
        Create New Trip
      </button>
    </div>
  );
};

export default ListTripsPage;
