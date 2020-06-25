import React from "react";
import styled from "styled-components";
import { decideCandidate } from "../functions/axios";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 4fr 1fr 1fr;
  grid-template-areas:
    "name age  text rjct aprv"
    "prof coun text rjct aprv";
`;

const Name = styled.div`
  grid-area: name;
`;

const ApplicationText = styled.div`
  grid-area: text;
`;
const Age = styled.div`
  grid-area: age;
`;
const Country = styled.div`
  grid-area: coun;
`;

const Profession = styled.div`
  grid-area: prof;
`;

const Approve = styled.button`
  grid-area: aprv;
`;

const Reject = styled.button`
  grid-area: rjct;
`;

const CandidateCard = (props) => {
  const { token, tripId, candidate } = props;

  const handleApproveClick = async () => {
    const status = await decideCandidate(tripId, candidate.id, true, token);
    status && window.location.reload()
  };

  const handleRejectClick = async () => {
    const status = await decideCandidate(tripId, candidate.id, false, token);
    status && window.location.reload()
  };

  return candidate ? (
    <MainContainer>
      <Name>{candidate.name}</Name>
      <ApplicationText>{candidate.applicationText}</ApplicationText>
      <Age>{`${candidate.age} y/o`}</Age>
      <Country>{candidate.country}</Country>
      <Profession>{candidate.profession}</Profession>
      <Reject onClick={handleRejectClick}>Reject</Reject>
      <Approve onClick={handleApproveClick}>Approve</Approve>
    </MainContainer>
  ) : null;
};

export default CandidateCard;
