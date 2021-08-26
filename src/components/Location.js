import React from 'react';
import { LocationContainer } from './layout/PageElements';
import { Link } from 'react-router-dom';

export const Location = (props) => {

    const { id, name, country_code, map_image, total_launch_count, total_landing_count } = props.location;

    return (
        <LocationContainer>
            <Link style={linkStyle} to={`/locations/location/${id}`}>
                <img style={imageStyle} src={map_image} alt="location-on-google-maps"/>
            </Link>
            <div style={cardDetailContainerStyle}>
                <h3>{name}</h3>
                <h4>{country_code}</h4>
                <br/>
                <p>Launches: {total_launch_count} Landings: {total_landing_count}</p>
            </div>
        </LocationContainer>
    )
}

const imageStyle = {
    margin: '5px',
    maxWidth: '420px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '4%',
}

const linkStyle = {
    linkStyle: 'none',
}

const cardDetailContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
}