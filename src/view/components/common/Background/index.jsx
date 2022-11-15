// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import { BackgroundWrapper } from './styles';

export const Background = () => {
    const { styleMode } = useSelector(state => state.general);
    return (
        <BackgroundWrapper
            className='background'
            styleMode={styleMode ? 1 : 0}
        >
        </BackgroundWrapper>
    )
}
