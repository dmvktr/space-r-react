import React from 'react';
import styled from 'styled-components';
import { Card,
    CardTop,
    CardImageContainer,
    CardPersonalDetail,
    CardBio } from './layout/AstronautElements';

const Astronaut = (props) => {
    return (
        <Card>
            <CardTop />
            <CardImageContainer>
                <AstronautImage picture={props.picture} />
            </CardImageContainer>
            <CardPersonalDetail id="astronautName">
                {props.name}
            </CardPersonalDetail>
            <CardPersonalDetail>
                {props.dob}
            </CardPersonalDetail>
            <CardPersonalDetail>
                {props.nationality}
            </CardPersonalDetail> 
            <CardPersonalDetail>
                {props.status}
            </CardPersonalDetail>
            <CardBio>
                {props.bio}
            </CardBio>
        </Card>
    )
}

const AstronautImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter:drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
    content:url(${(props) => props.picture});
`;

export default Astronaut
