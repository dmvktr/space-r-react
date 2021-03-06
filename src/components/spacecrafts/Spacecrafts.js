import React from "react";
import Spacecraft from "./Spacecraft";
import { useEffect, useState } from "react";
import {
  SpacecraftsMainContainer,
  SpacecraftsCardsMainContainer,
  SpacecraftsCardContainer,
} from "../layout/SpacecraftsElements";
import { Error } from "../layout/ErrorElements";
import {PageTitle} from "../layout/PageElements";
import {dataHandler} from "../data_handler";



const Spacecrafts = (props) => {
  // const baseEndpoint = "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/";
  const baseEndpoint = "http://localhost:8080/spacecrafts/";
  const fetchLimit = 10;
  const offset = 0;

  const [error, setError] = useState("");
  const [spacecrafts, setSpacecrafts] = useState({
    next: null,
    previous: null,
    results: [],
    agency: [],
  });

  const assembleTargetURL = () => {
    return `${baseEndpoint}?format=json&limit=${fetchLimit}&offset=${offset}`;
  };

  useEffect(() => {
   dataHandler._api_get(assembleTargetURL(), setSpacecrafts, setError)
  }, []);

  return (
    <SpacecraftsMainContainer>
      <PageTitle data-testid="spacecraft-header">Spacecrafts</PageTitle>
      {error ? (
        <Error>
          An error occured while fetching spacecrafts information. Please try
          again later!
        </Error>
      ) : (
        <SpacecraftsCardsMainContainer>
          {spacecrafts.results.map((spacecraft) => (
            <SpacecraftsCardContainer key={spacecraft.id}>
              <Spacecraft
                key={spacecraft.id}
                name={spacecraft.name}
                status={spacecraft.in_use}
                capacity={spacecraft.crew_capacity}
                image={spacecraft.image_url}
                agencyName={spacecraft.agency.name}
                agencyDescription={spacecraft.agency.description}
                capability={spacecraft.capability}
                rated={spacecraft.human_rated}
              />
            </SpacecraftsCardContainer>
          ))}
        </SpacecraftsCardsMainContainer>
      )}
    </SpacecraftsMainContainer>
  );
};

export default Spacecrafts;
