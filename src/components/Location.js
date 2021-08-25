import React from 'react';
import { LocationContainer } from './layout/PageElements';
import { Link } from 'react-router-dom';

export const Location = (props) => {

    const { id, name, country_code, map_image, total_launch_count, total_landing_count } = props.location;

    return (
        <Link style={linkStyle} to={`/locations/location/${id}`}>
            <LocationContainer>
                <img style={imageStyle} src={map_image} alt="location-on-google-maps"/>
                <h3>{name}</h3>
                <h4>{country_code}</h4>
                <p>Launches: {total_launch_count} Landings: {total_landing_count}</p>            
            </LocationContainer>
        </Link>
    )
}

const imageStyle = {
    width: '300px',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '4%',
}


const linkStyle = {
    linkStyle: 'none',
}