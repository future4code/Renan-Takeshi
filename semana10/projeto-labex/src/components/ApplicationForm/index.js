import React from "react";
import { useHistory, useParams } from "react-router-dom";
import TripDetailsCard from "../TripDetailsCard";
import useRequestTrips from "../hooks/useRequestTrips";

const ApplicationForm = () => {
  const { tripId } = useParams();
  const trips = useRequestTrips();
  const history = useHistory();

  return (
    <div>
      <TripDetailsCard
        trip={trips && trips.find((trip) => trip.id === tripId)}
      />
      <button
        onClick={() => {
          history.push("/trips/list");
        }}
      >
        Cancelar
      </button>
    </div>
  );
};

export default ApplicationForm;
