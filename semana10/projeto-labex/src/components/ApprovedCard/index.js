import React from "react";
import {
  Card,
  Name,
  ApplicationText,
  Age,
  Country,
  Profession,
} from "./styles";

const ApprovedCard = (props) => {
  const { candidate } = props;

  return candidate ? (
    <Card>
      <Name>{candidate.name}</Name>
      <ApplicationText>{candidate.applicationText}</ApplicationText>
      <Age>{`${candidate.age} y/o`}</Age>
      <Country>{candidate.country}</Country>
      <Profession>{candidate.profession}</Profession>
    </Card>
  ) : null;
};

export default ApprovedCard;
