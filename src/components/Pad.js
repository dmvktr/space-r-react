import React from 'react';
import { PadContainer } from './layout/LocationElements';

export const Pad = (props) => {

    const { name, wiki_url, latitude, longitude, total_launch_count } = props.pad;

    return (
        <PadContainer>
            <br/>
            <a style={anchorStyle} href={wiki_url}>
                {name}
            </a>
            <br/><br/>
            <p>Longitude: {longitude}</p>
            <p>Latitude: {latitude}</p>
            <br/>
            <p>Total launch count: {total_launch_count}</p>
        </PadContainer>
    )
}

const anchorStyle = {
    textDecoration: 'none',
    color: '#c7e5ff',
    fontSize: '30px',
}
