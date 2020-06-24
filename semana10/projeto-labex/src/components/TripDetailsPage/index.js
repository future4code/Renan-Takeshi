import React from "react";
import { useHistory, useParams } from "react-router-dom";
import TripCard from "../TripCard";
import CandidateCard from "../CandidateCard";
import useRequestTripDetails from "../hooks/useRequestTripDetails";

const TripDetailsPage = () => {
  const { tripId } = useParams();
  const trip = useRequestTripDetails(tripId);
  const history = useHistory();

  const renderedCandidates =
    trip && trip.candidates.map((item) => <CandidateCard key={item.id} candidate={item} />);

  return (
    <div>
      <TripCard trip={trip} />
      {renderedCandidates}
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

export default TripDetailsPage;
