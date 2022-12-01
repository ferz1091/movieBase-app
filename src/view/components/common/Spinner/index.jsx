// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Assets
import spinnerDark from '../../../../assets/spinner_for_light.svg';
import spinnerLight from '../../../../assets/spinner_for_dark.svg';

// Styles
import { SpinnerWrapper } from './styles';

export const Spinner = () => {
    const { styleMode } = useSelector(state => state.general);
    return (
        <SpinnerWrapper className='spinner'>
            <img 
                src={styleMode ? spinnerLight : spinnerDark}
                alt='' 
            />
        </SpinnerWrapper>
    )
}
