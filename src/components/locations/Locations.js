import React, {useEffect, useState} from "react";
import {Location} from "./Location";

import {LocationMainContainer, LocationsContainer} from "../layout/LocationElements";
import {Error} from "../layout/ErrorElements"
import {PageTitle} from "../layout/PageElements"
import {dataHandler} from "../data_handler";


const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState("");
    const [locationUrl] = useState('http://localhost:8080/locations/');

  useEffect(() => {
    dataHandler._api_get_results(locationUrl, setLocations, setError)
  }, [locationUrl])

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
                    />
                ))}
              </LocationsContainer>
            </div>
        )
        }
      </LocationMainContainer>
  );
};


export default Locations;
