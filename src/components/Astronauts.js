import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Astronaut from "./Astronaut";
import { AstronautMainContainer,
    AstronautCardContainer,
    AstronautCardsMainContainer,
    AstronautsPageText } from "./layout/AstronautElements";
import { Error } from "./layout/ErrorElements";

const Astronauts = (props) => {
  const baseEndpoint = "https://ll.thespacedevs.com/2.2.0/astronaut/";
  const fetchLimit = 2;
  const offset = 0;

  const [astronauts, setAstronauts] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [error, setError] = useState('');
  


  const assembleTargetURL = () => {
    return `${baseEndpoint}?format=json&limit=${fetchLimit}&offset=${offset}`;
  };

  useEffect(() => {
    axios
        .get(assembleTargetURL())
        .then((res) => {
          setAstronauts({
            next: res.data.next,
            previous: res.data.previous,
            results: res.data.results
          });
        })
        .catch((err) => {
          setError(err.message)
        })
    }, []);

  return (
      <AstronautMainContainer>
      <AstronautsPageText>
        Astronauts
      </AstronautsPageText>
      {error ? (
            <Error>
              An error occured while fetching the astronauts information. Please try again later!
            </Error>
        ) : (
        <AstronautCardsMainContainer>
          {astronauts.results.map((astronaut) => (
          <AstronautCardContainer key={astronaut.id}>
            <Astronaut
          key={astronaut.id}
          name={astronaut.name}
          picture={astronaut.profile_image_thumbnail}
          theme={props.theme}
          dob={astronaut.date_of_birth}
          nationality={astronaut.nationality}
          status={astronaut.status.name}
          bio={astronaut.bio}
          id="card"></Astronaut>
        </AstronautCardContainer>
      ))}
      </AstronautCardsMainContainer>
      )}
      </AstronautMainContainer>
  );
};

export default Astronauts;
