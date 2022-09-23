// Core
import React from 'react';

// Styles
import { InfoBarWrapper } from './styles';

export const InfoBar = (movie) => {
    return (
        <InfoBarWrapper className='InfoBar'>
            <span className='info icon'>
            </span>
            <span className='actors icon'>
            </span>
            <span className='company icon'>
            </span>
            <span className='collection icon'>
            </span>
            <span className='homepage icon'>
            </span>
            <span className='imdb icon'>
            </span>
        </InfoBarWrapper>
    )
}