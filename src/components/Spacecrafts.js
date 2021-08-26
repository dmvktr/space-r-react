import React from 'react';
import Spacecraft from './Spacecraft';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SpacecraftsMainContainer,
    SpacecraftsCardsMainContainer,
    SpacecraftsPageText,
    SpacecraftsCardContainer } from './layout/SpacecraftsElements';
import { Error } from './layout/ErrorElements';

const Spacecrafts = (props) => {
    const baseEndpoint = "https://ll.thespacedevs.com/2.2.0/config/spacecraft/";
    const fetchLimit = 10;
    const offset = 0;

    const [error, setError] = useState('');
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
        axios
            .get(assembleTargetURL())
            .then((res) => {
                setSpacecrafts({
                next: res.data.next,
                previous: res.data.previous,
                results: res.data.results,
              });
            })
            .catch((err) => {
              setError(err.message)
            })
        }, []);

    return (
        <SpacecraftsMainContainer>
            <SpacecraftsPageText>
                Spacecrafts
            </SpacecraftsPageText>
            {error ? (
                <Error>
                An error occured while fetching spacecrafts information. Please try again later!
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
    )
}

export default Spacecrafts
