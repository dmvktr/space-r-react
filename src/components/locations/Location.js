import React from 'react';
import {LocationCard, LocationContainer} from '../layout/LocationElements';

export const Location = (props) => {
    
    const { name, country_code, map_image, total_launch_count, total_landing_count } = props.location;


    return (
        <LocationContainer>
            <img
                src={map_image}
                alt="location-on-google-maps"/>
            <LocationCard>
                <h3>{name}</h3>
                <h4>{country_code}</h4>
                <p>Launches: {total_launch_count} Landings: {total_landing_count}</p>
            </LocationCard>
        </LocationContainer>
    )
}
