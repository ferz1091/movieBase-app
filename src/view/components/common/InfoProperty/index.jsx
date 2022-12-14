// Core
import React from 'react';

// Styles
import { PropertyWrapper } from './styles';

export const InfoProperty = (property) => {
    if (property.isVisible) {
        return (
            <PropertyWrapper className={property.class}>
                <span className='prop'>
                    {property.name}
                </span>
                <span className='value'>
                    {property.value}
                </span>
            </PropertyWrapper>
        )
    }
    return null;
}