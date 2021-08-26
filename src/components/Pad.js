import React from 'react';
import { PadContainer, PadsContainer } from './layout/LocationElements';

export const Pad = (props) => {

    const { name, wiki_url, latitude, longitude, total_launch_count } = props.pad;
    
    return (
        <PadsContainer>
            <PadContainer>
                <p>You can visit the wikipedia by click on the name:</p>
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
        </PadsContainer>
    )
}

const anchorStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
}
