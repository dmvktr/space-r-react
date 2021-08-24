import React from "react";
import styled from "styled-components";

const GalleryCard = (props) => {
  return (
    <Card>
      <Thumbnail picture={props.picture.url} />
      <Title>{props.picture.title}</Title>
      <Date date={props.picture.date} />
    </Card>
  );
};

const Thumbnail = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Title = styled.h4`
  opacity: 0;
  text-align: center;
  position: relative;
  height: 1em;
  top: -30px;
  z-index: 40;
  font-size: 20px;
  color: white;
  overflow: hidden;
`;

const Card = styled.div`
  width: auto;
  height: 15vh;
  &:hover ${Title} {
    opacity: 100;
  }
  cursor: pointer;
`;

const Date = styled.h3``;

export default GalleryCard;
