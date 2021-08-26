import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { Pad } from './Pad';
import { LocationMainContainer,
  LocationsContainer,
  Error,
  PadsContainer,
  LocationPads,
  PadCard } from "./layout/LocationElements";
import axios from "axios";

const Locations = () => {
  const url = 'https://lldev.thespacedevs.com/2.0.0/location/?format=json&limit=3&';

  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");

  const url = "https://lldev.thespacedevs.com/2.2.0/location/?limit=3";

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data.results);
        setLocations(response.data.results)
      })
      .catch(err => {
        console.log("REQUEST SENT AND AN ERROR OCCURED: " + err.message);
        setError(err.message)
      });
  }, [url])

  const [pads, setPads] = useState([]);

  const getPads = (url) => {
    axios.get(url)
    .then(response => {
      console.log(response.data);
      setPads(response.data.pads)
    });
  }

  useEffect((url) => {
    getPads(url);
  }, [url])

  return (
    <LocationMainContainer>
      <h3 style={textToTop}>Locations</h3>
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
                getPads={getPads}/>
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

const textToTop = {
  position: 'absolute',
  top: '8.5vh',
  left: '45vw',
  fontSize: 40,
  color: 'whitesmoke'
}

export default Locations;
