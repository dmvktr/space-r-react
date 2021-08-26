import React from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import {
  Card,
  CardTop,
  CardImageContainer,
  CardPersonalDetail,
  CardBio,
  AstronautName,
} from "./layout/AstronautElements";

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

const AstronautImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  content: url(${(props) => props.picture});
`;

export default Astronaut;
