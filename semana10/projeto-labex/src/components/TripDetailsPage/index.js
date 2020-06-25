import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useRequestTripDetails from "../hooks/useRequestTripDetails";
import TripDetailsCard from "../TripDetailsCard";
import CandidateCard from "../CandidateCard";
import ApprovedCard from "../ApprovedCard";

const TripDetailsPage = () => {
  const { tripId } = useParams();
  const token = localStorage.getItem('token')
  const trip = useRequestTripDetails(tripId, token);
  const history = useHistory();


  const renderedCandidates =
    trip &&
    trip.candidates.map((item) => (
      <CandidateCard key={item.id} token={token} tripId={tripId} candidate={item} />
    ));

    const renderedApproved =
    trip &&
    trip.approved.map((item) => (
      <ApprovedCard key={item.id} candidate={item} />
    ));

  return (
    <div>
      <h3>Trip Details</h3>
      <TripDetailsCard trip={trip} />
      <h3>Candidates</h3>
      {renderedCandidates}
      <h3>Approved</h3>
      {renderedApproved}
      <button onClick={() => history.push("/trips/list")}>Back to list</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default TripDetailsPage;
