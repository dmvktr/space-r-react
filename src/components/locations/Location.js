import React from 'react';
import {LocationContainer, LocationCard, LocationImage} from '../layout/LocationElements';

export const Location = (props) => {
    
    const { landingPads, name, country_code, map_image, total_launch_count, total_landing_count } = props.location;

    return (
        <LocationContainer>
            <LocationImage
                src={map_image}
                onClick={props.getPads.bind(this, landingPads)}
                alt="location-on-google-maps"/>
            <LocationCard>
                <h3>{name}</h3>
                <h4>{country_code}</h4>
                <p>Launches: {total_launch_count} Landings: {total_landing_count}</p>
            </LocationCard>
        </LocationContainer>
    )
}
