// Core
import React from 'react';

// Assets
import errorImg from '../../../../assets/icons/error.png';

// Styles
import { ErrorWrapper } from './styles';

export const Error = (props) => {
    return (
        <ErrorWrapper className='error'>
            <img 
                src={errorImg}
                alt='errorImg'
            />
            {props.error}
        </ErrorWrapper>
    )
}
