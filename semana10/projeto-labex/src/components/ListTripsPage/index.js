import React from "react";
import { useHistory } from "react-router-dom";
import useTrips from "../hooks/useTrips";
const ListTripsPage = () => {
  const history = useHistory();
  const trips = useTrips();
  console.table(trips);

  const handleClick = (event) => {
    history.push(event.target.value);
  };

  return (
    <div>
      TripsList
      <button value={"/trips/details"} onClick={handleClick}>
        go to details
      </button>
      <button
        onClick={() => {
          history.push("/application-form");
        }}
      >
        go to form
      </button>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        go to create
      </button>
    </div>
  );
};

export default ListTripsPage;
