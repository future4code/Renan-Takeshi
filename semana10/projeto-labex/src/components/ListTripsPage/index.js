import React from "react";
import { useHistory } from "react-router-dom";
import useRequestTrips from "../hooks/useRequestTrips";
const ListTripsPage = () => {
  const history = useHistory();
  const trips = useRequestTrips();

  const handleClick = (event) => {
    history.push(event.target.value);
  };

const renderedTrips = trips && trips.map((item)=><div key={item.id}>{item.name}</div>)

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
