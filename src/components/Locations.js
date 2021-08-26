import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { LocationMainContainer, LocationsContainer, Error } from "./layout/LocationElements";
import axios from "axios";

const Locations = () => {

  const [locations, setLocations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://ll.thespacedevs.com/2.0.0/location/?format=json&limit=3&')
      .then(response => setLocations(response.data.results))
      .catch(err => setError(err.message));
  }, [])

  return (
    <LocationMainContainer>
      {error ? (
        <Error>
          An error occurred while trying to fetch
        </Error>
        ) : (
          <LocationsContainer>
            {locations.map(location => (
              <Location key={location.id} location={location}/>
            ))}
          </LocationsContainer>
        )
      }
    </LocationMainContainer>
  );
};

export default Locations;
