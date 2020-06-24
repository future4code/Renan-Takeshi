import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "name  age  text text text but"
    "coun  prof text text text but";
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

const CandidateCard = (props) => {
  const { candidate } = props;

  return candidate ? (
    <MainContainer>
      <Name>{candidate.name}</Name>
      <ApplicationText>{candidate.applicationText}</ApplicationText>
      <Age>{candidate.age}</Age>
      <Country>{candidate.country}</Country>
      <Profession>{candidate.profession}</Profession>
    </MainContainer>
  ) : null;
};

export default CandidateCard;
