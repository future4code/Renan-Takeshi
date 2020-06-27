import React from "react";
import { decideCandidate } from "../functions/axios";
import {
  Card,
  Name,
  ApplicationText,
  Age,
  Country,
  Profession,
  Approve,
  Reject,
} from "./styles";

const CandidateCard = (props) => {
  const { tripId, candidate, requestDetails } = props;

  const handleApproveClick = async () => {
    const status = await decideCandidate(tripId, candidate.id, true);
    status && requestDetails();
  };

  const handleRejectClick = async () => {
    const status = await decideCandidate(tripId, candidate.id, false);
    status && requestDetails();
  };

  return candidate ? (
    <Card>
      <Name>{candidate.name}</Name>
      <ApplicationText>{candidate.applicationText}</ApplicationText>
      <Age>{`${candidate.age} y/o`}</Age>
      <Country>{candidate.country}</Country>
      <Profession>{candidate.profession}</Profession>
      <Reject onClick={handleRejectClick}>Reject</Reject>
      <Approve onClick={handleApproveClick}>Approve</Approve>
    </Card>
  ) : null;
};

export default CandidateCard;
