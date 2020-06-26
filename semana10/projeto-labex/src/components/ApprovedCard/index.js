import React from "react";
import {
  MainContainer,
  Name,
  ApplicationText,
  Age,
  Country,
  Profession,
} from "./styles";

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
