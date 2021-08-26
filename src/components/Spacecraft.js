import React from 'react';
import { Card,
        SpacecraftImageContainer,
        CardBody,
        CardPersonalDetail,
        SpacecraftAttributeSpan,
        SpacecraftImage } from './layout/SpacecraftsElements';

const Spacecraft = (props) => {
    const attribute = {
        status: props.status ? "active" : "inactive",
        rated: props.rated ? "human rated" : "cargo",
        capacity: props.capacity !== null ? `Crew Capacity: ${props.capacity}` : null
    }
    const spacecraftAttributes = [attribute.status, attribute.rated, attribute.capacity];

    return (
        <Card>
            <SpacecraftImageContainer>
                <SpacecraftImage image={props.image} />
            </SpacecraftImageContainer>
            <CardBody>
                <CardPersonalDetail>
                    <h3>{props.name}</h3>
                </CardPersonalDetail>
                <CardPersonalDetail>
                {spacecraftAttributes.filter(attribute => attribute !== null).map((attribute) => (
                    <SpacecraftAttributeSpan key={attribute} detail={attribute}>{attribute}</SpacecraftAttributeSpan>
                ))}
                </CardPersonalDetail>
                <CardPersonalDetail className="underline-padding">
                    <h4>{props.agencyName}</h4>
                </CardPersonalDetail>
                <CardPersonalDetail className="left">
                    <div>
                        <h5>Agency information</h5>
                        <p>{props.agencyDescription}</p>
                    </div>
                </CardPersonalDetail>
            </CardBody>
        </Card>
    )
}

export default Spacecraft
