import React from 'react';
import {Country, Details, LocationCard, LocationContainer, LocationImage, Name} from '../layout/LocationElements';

export const Location = (props) => {
    
    const { name, country_code, map_image, total_launch_count, total_landing_count } = props.location;


    return (
        <LocationContainer>
            <LocationImage
                src={map_image}
                alt="location-on-google-maps"/>
            <LocationCard>
                <Name>{name}</Name>
                <Country>{country_code}</Country>
                <Details>Launches: {total_launch_count} Landings: {total_landing_count}</Details>
            </LocationCard>
        </LocationContainer>
    )
}
