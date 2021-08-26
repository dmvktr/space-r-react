import React from 'react';
import { PaginationIcon } from './layout/AstronautElements';

const Pagination = (props) => {
    const handleClick = () => {
        props.onClick(props.url)
    }

    return (
        <PaginationIcon icon={props.icon} onClick={handleClick}/>
    )
}

export default Pagination
