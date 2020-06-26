import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useRequestTripDetails from "../hooks/useRequestTripDetails";
import TripDetailsCard from "../TripDetailsCard";
import CandidateCard from "../CandidateCard";
import ApprovedCard from "../ApprovedCard";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main } from "../styles";
import { Button, H } from "./styles";

const TripDetailsPage = () => {
  const { tripId } = useParams();
  const token = localStorage.getItem("token");
  const [trip, forceUpdate] = useRequestTripDetails(tripId, token);
  const history = useHistory();

  const renderedCandidates =
    trip &&
    trip.candidates.map((item) => (
      <CandidateCard
        key={item.id}
        token={token}
        tripId={tripId}
        candidate={item}
        forceUpdate={forceUpdate}
      />
    ));

  const renderedApproved =
    trip &&
    trip.approved.map((item) => (
      <ApprovedCard key={item.id} candidate={item} />
    ));

  return (
    <Body>
      <Header />
      <Main>
        <TripDetailsCard trip={trip} />
        <hr/>
        <H>Candidates</H>
        {renderedCandidates}
        <hr/>
        <H>Approved</H>
        {renderedApproved}
        <hr/>
        <Button onClick={() => history.push("/trips/list")}>
          Back to list
        </Button>
        <Button onClick={() => history.push("/")}>Go to Home</Button>
      </Main>
      <Footer />
    </Body>
  );
};

export default TripDetailsPage;
