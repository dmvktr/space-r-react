import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GalleryCard from "./GalleryCard";

const Gallery = (props) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=25";

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((error) => {
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
        );
      });
  }, [url]);
  return (
    <CardContainer>
      {gallery.map((picture) => (
        <GalleryCard
          key={picture.title}
          picture={picture}
          theme={props.theme}
        ></GalleryCard>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`;

export default Gallery;
