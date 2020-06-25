import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 6fr;
  grid-template-areas:
    "name age  text"
    "prof coun text";
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

const ApprovedCard = (props) => {
  const { candidate } = props;

  return candidate ? (
    <MainContainer>
      <Name>{candidate.name}</Name>
      <ApplicationText>{candidate.applicationText}</ApplicationText>
      <Age>{`${candidate.age} y/o`}</Age>
      <Country>{candidate.country}</Country>
      <Profession>{candidate.profession}</Profession>
    </MainContainer>
  ) : null;
};

export default ApprovedCard;
