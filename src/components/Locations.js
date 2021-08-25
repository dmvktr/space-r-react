import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import { LocationsContainer } from "./layout/PageElements";
import axios from "axios";

const Locations = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://ll.thespacedevs.com/2.0.0/location/?format=json')
      .then(response => setLocations(response.data.results));
  }, [])

  // const [locations, setLocations] = useState([
  //   {
  //     id: 151,
  //     url: "https://ll.thespacedevs.com/2.2.0/location/151/?format=json",
  //     name: "Broglio Space Center, Kenya",
  //     country_code: "ITA",
  //     map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_151_20200803142409.jpg",
  //     total_launch_count: 0,
  //     total_landing_count: 0
  //     },
  //     {
  //     id: 10,
  //     url: "https://ll.thespacedevs.com/2.2.0/location/10/?format=json",
  //     name: "Onenui Station, Mahia Peninsula, New Zealand",
  //     country_code: "NZL",
  //     map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_10_20200803142509.jpg",
  //     total_launch_count: 21,
  //     total_landing_count: 2
  //     },
  //     {
  //     id: 24,
  //     url: "https://ll.thespacedevs.com/2.2.0/location/24/?format=json",
  //     name: "Uchinoura Space Center, Japan",
  //     country_code: "JPN",
  //     map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_24_20200803142411.jpg",
  //     total_launch_count: 6,
  //     total_landing_count: 0
  //     },
  // ]);

  return (
    <LocationsContainer>
      {locations.map(location => (
        <Location key={location.id} location={location}/>
      ))}
    </LocationsContainer>
  );
};

export default Locations;
