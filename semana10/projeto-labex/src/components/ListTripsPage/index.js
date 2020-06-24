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
      <span><h2>TripsList</h2></span>
      <button
        onClick={() => {
          history.push("/trips/create");
        }}
      >
        Create New Trip
      </button>
      {renderedTrips}

    </div>
  );
};

export default ListTripsPage;
