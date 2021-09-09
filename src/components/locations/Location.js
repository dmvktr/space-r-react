import React from 'react';
import { LocationContainer, LocationCard } from '../layout/LocationElements';

export const Location = (props) => {
    
    const { name, country_code, map_image, total_launch_count, total_landing_count } = props.location;

    const handleClick = () => {
        props.onClick(props.key);
    }

    return (
        <LocationContainer onClick={handleClick}>
            <img style={locationImage} 
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

const locationImage = {
  margin: "5px",
  maxWidth: "420px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: "4%",
};
