// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Assets
import errorImg from '../../../../assets/icons/error.png';
import errorImg_light from '../../../../assets/icons/error_light.png';

// Styles
import { ErrorWrapper } from './styles';

export const Error = (props) => {
    const { styleMode } = useSelector(state => state.general);
    return (
        <ErrorWrapper 
            className='error'
            styleMode={styleMode ? 1 : 0}
        >
            <img 
                src={styleMode ? errorImg_light : errorImg}
                alt='errorImg'
            />
            {props.error}
        </ErrorWrapper>
    )
}
