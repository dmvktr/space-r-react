import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Astronaut from "./Astronaut";
import Pagination from "./Pagination";
import {PageTitle} from "./layout/PageElements";
import { AstronautMainContainer,
    AstronautCardContainer,
    AstronautCardsMainContainer,
    Error } from "./layout/AstronautElements";
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Astronauts = (props) => {
  const [url, setUrl] = useState("https://lldev.thespacedevs.com/2.2.0/astronaut/?limit=2");
  const [astronauts, setAstronauts] = useState({
    next: null,
    previous: null,
    results: [],
  });
  const [error, setError] = useState('');


  const handleClick = (url) => {
      if(url !== null){
        setUrl(url);
      } 
  }

  useEffect(() => {
    axios
        .get(url)
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
    }, [url]);

  return (
    <AstronautMainContainer>
      <PageTitle>Astronauts</PageTitle>
      {error ? (
        <Error>
          An error occured while fetching the astronauts information. Please try
          again later!
        </Error>
      ) : (
        <>
        <Pagination icon={faAngleDoubleLeft} url={astronauts.previous} onClick={handleClick} />
        <Pagination icon={faAngleDoubleRight} url={astronauts.next} onClick={handleClick} />
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
                id="card"
              ></Astronaut>
            </AstronautCardContainer>
          ))}
        </AstronautCardsMainContainer>
      </>
      )}
    </AstronautMainContainer>
  );
};

export default Astronauts;
