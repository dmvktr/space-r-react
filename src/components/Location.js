import React, { useState, useEffect } from 'react';
import { LocationContainer, LocationCard, Error } from './layout/LocationElements';
import axios from 'axios';
import { Pad } from './Pad';

export const Location = (props) => {

    const { id, name, country_code, map_image, total_launch_count, total_landing_count } = props.location;

    const [pads, setPads] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://ll.thespacedevs.com/2.2.0/location/${id}/?format=json`)
        .then(res => setPads(res.data.pads))
        .catch(err => setError.message)
    }, [id])

    console.log(pads);

    return (
        <div>
            {error ? (
            <Error>
                An error occured
            </Error>
            ) : (
            <LocationContainer>
                <img style={locationImage} src={map_image} alt="location-on-google-maps"/>
                <LocationCard>
                    <h3>{name}</h3>
                    <h4>{country_code}</h4>
                    <br/>
                    <p>Launches: {total_launch_count} Landings: {total_landing_count}</p>
                </LocationCard>
                <div>
                    {pads.map(pad => 
                        <Pad key={pad.id} pad={pad}/>)}
                </div>
            </LocationContainer>
            )
        }
        </div>
    )
}

const locationImage = {
    margin: '5px',
    maxWidth: '420px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '4%',
};
