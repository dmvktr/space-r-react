import React from 'react';
import { PadsContainer } from './layout/PageElements';

export const Pad = (props) => {

    const { name, wiki_url, map_url, latitude, longitude, total_launch_count } = props.pad;
    
    return (
        <PadsContainer>
            <img src={map_url} alt="pad-location-on-google-maps"/>
            <p>For more information about the pad, you can visit the wikipedia site:
            <a href={wiki_url}>
                {name}
            </a>
            </p>
            <p>Longitude: {longitude}  |  Latitude: {latitude}</p>
            <p>Total launch count: {total_launch_count}</p>
        </PadsContainer>
    )
}
