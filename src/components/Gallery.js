import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import {Error} from "./layout/ErrorElements"
import {PageTitle} from "./layout/PageElements"
import { GalleryPageContainer, CardContainer } from "./layout/GalleryElements";

const Gallery = (props) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=25";

  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((error) => {
        setError(error.message);
        console.error(
          `The request was made and the server responded
        with a status code that falls out of the range of 2xx ` + error.message
        );
      });
  }, [url]);

  return (
    <GalleryPageContainer>
      <PageTitle>Gallery</PageTitle>
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
