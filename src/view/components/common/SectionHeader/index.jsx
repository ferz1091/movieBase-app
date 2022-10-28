// Core
import React from 'react';

export const SectionHeader = (props) => {
    return (
        <h2>
            <img
                src={props.img}
                alt={`${props.alt}`}
            />
            {props.value}
        </h2>
    )
}
