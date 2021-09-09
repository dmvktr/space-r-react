import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { Pad } from './Pad';
import { LocationMainContainer,
  LocationsContainer,
  PadsContainer,
  LocationPads,
  PadCard } from "../layout/LocationElements";
import {Error} from "../layout/ErrorElements"
import {PageTitle} from "../layout/PageElements"
import {dataHandler} from "../data_handler";


const Locations = () => {
  const locationUrl = 'http://localhost:8080/locations/';

  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    dataHandler._api_get_results(locationUrl, setLocations, setError)
  }, [locationUrl])

  const [pads, setPads] = useState([]);

  const getPads = (padId) => {
    dataHandler._api_post("/locations", padId, setPads, setError);
  }

  return (
    <LocationMainContainer>
      <PageTitle data-testid="locations-header">Locations</PageTitle>
      {error ? (
        <Error>
          An error occurred while tried to fetch
        </Error>
        ) : (
          <div>
            <LocationsContainer>
              {locations.map(location => (
                <Location key={location.id}
                location={location}
                onClick={()=>getPads(location.id)}
                />
              ))}
            </LocationsContainer>
            <PadsContainer>
              {error ? (
                <Error>
                  An error occurred while tried to fetch
                </Error>
                ) : (
                <LocationPads>
                  <PadCard>
                    <p style={padTextSmall}>Click on a picture above to see pads location</p>
                    {pads.map(pad =>
                        <Pad key={pad.id} pad={pad}/>)}
                  </PadCard>
                </LocationPads>
              )}
            </PadsContainer>
          </div>
        )
      }
    </LocationMainContainer>
  );
};

const padTextSmall = {
  fontSize: 16,
  color: 'whitesmoke',
  position: 'absolute',
  top: 0,
  marginTop: '10px',
  justifyContent: 'center',
};

export default Locations;
