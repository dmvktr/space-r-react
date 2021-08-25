import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pad } from "./Pad";

export const LocationDetails = ({ match }) => {
  const url = `https://ll.thespacedevs.com/2.2.0/location/${match.params.id}/?format=json`;
  const [details, setDetails] = useState({
    id: null,
    url: null,
    name: null,
    country_code: null,
    map_image: null,
    total_launch_count: null,
    total_landing_count: null,
    pads: [],
  });
  //     {
  //         id: 151,
  //         url: "https://ll.thespacedevs.com/2.2.0/location/151/?format=json",
  //         name: "Broglio Space Center, Kenya",
  //         country_code: "ITA",
  //         map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_151_20200803142409.jpg",
  //         total_launch_count: 0,
  //         total_landing_count: 0,
  //         pads: [
  //             {
  //                 url: "https://ll.thespacedevs.com/2.2.0/pad/155/?format=json",
  //                 agency_id: null,
  //                 name: "San Marco platform",
  //                 info_url: null,
  //                 wiki_url: "https://en.wikipedia.org/wiki/Broglio_Space_Center",
  //                 map_url: "http://maps.google.com/maps?q=-2.9383333,40.210306",
  //                 latitude: "-2.9383333",
  //                 longitude: "40.210306",
  //                 map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_155_20200803143349.jpg",
  //                 total_launch_count: 0
  //             },
  //         ]
  //     }
  // );

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setDetails({
        id: res.data.id,
        name: res.data.name,
        url: res.data.url,
        country_code: res.data.country_code,
        map_image: res.data.map_image,
        total_launch_count: res.data.total_launch_count,
        total_landing_count: res.data.total_landing_count,
        pads: res.data.pads,
      });
    });
  }, [url]);

  return (
    <div>
      <img src={details.map_image} alt="location-on-google-maps" />
      <h1>{details.name}</h1>
      <h2>{details.country_code}</h2>
      <p>
        Launches: {details.total_launch_count} | Landings:{" "}
        {details.total_landing_count}
      </p>
      <br />
      {details.pads.map((pad) => (
        <Pad key={pad.id} pad={pad} />
      ))}
    </div>
  );
};
