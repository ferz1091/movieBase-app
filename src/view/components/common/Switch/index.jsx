// Core
import React from 'react';

// Styles
import { SwitchWrapper } from './styles';

export const Switch = (props) => {
    return (
        <SwitchWrapper styleMode={props.styleMode} >
            <span className='slider-icon'>
            </span>
            <span 
                className='slider'
                onClick={() => {
                    if (props.styleMode) {
                        localStorage.setItem('styleMode', '');
                        props.toggleStyle('');
                    } else {
                        localStorage.setItem('styleMode', '1');
                        props.toggleStyle('1');
                    }
                }}
            >
            </span>
        </SwitchWrapper>
    )
}
