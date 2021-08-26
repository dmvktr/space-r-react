import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pad } from './Pad';

export const LocationDetails = ({match}) => {

    const [pads, setPads] = useState([]);
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
        axios.get(`https://ll.thespacedevs.com/2.2.0/location/${match.params.id}/?format=json`)
        .then(res => setPads(res.data.pads));
    }, [match.params.id]);
        
    return (
        <div>
            {pads.map(pad => (
                <Pad key={pad.id} pad={pad}/>
            ))}
        </div>
    )
}
