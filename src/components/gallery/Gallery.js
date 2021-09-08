import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import {Error} from "../layout/ErrorElements"
import {PageTitle} from "../layout/PageElements"
import { GalleryPageContainer, CardContainer } from "../layout/GalleryElements";
import {dataHandler} from "../data_handler";

const Gallery = (props) => {
  // const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=25";
  const url = "http://localhost:8080/gallery";

  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    dataHandler._api_get(url, setGallery, setError);
  }, [url]);

  return (
    <GalleryPageContainer>
      <PageTitle data-testid="gallery-header">Gallery</PageTitle>
      {error ? (
        <Error>
          An error occured, while fetching the astronauts information. Please
          try again later!
        </Error>
      ) : (
        <CardContainer>
          {gallery.map((picture) => (
            <GalleryCard
              key={picture.title}
              picture={picture}
              theme={props.theme}
            ></GalleryCard>
          ))}
        </CardContainer>
      )}
    </GalleryPageContainer>
  );
};

export default Gallery;
