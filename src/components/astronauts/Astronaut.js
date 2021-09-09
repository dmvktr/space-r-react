import React from "react";
import {
  Card,
  CardTop,
  CardImageContainer,
  CardPersonalDetail,
  CardBio,
  AstronautName,
  AstronautImage,
} from "../layout/AstronautElements";

const Astronaut = (props) => {
  return (
    <Card id="astronautCard">
      <CardTop />
      <CardImageContainer>
        <AstronautImage picture={props.picture} />
      </CardImageContainer>
      <AstronautName id="astronautName">{props.name}</AstronautName>
      <CardPersonalDetail>{props.dob}</CardPersonalDetail>
      <CardPersonalDetail>{props.nationality}</CardPersonalDetail>
      <CardPersonalDetail color={props.status === "Active" ? "green" : "red"}>
        {props.status}
      </CardPersonalDetail>
      <CardBio>{props.bio}</CardBio>
    </Card>
  );
};

export default Astronaut;
