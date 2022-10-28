// Core
import React from 'react';

// Components
import { SectionHeader } from '../../common';

// Assets
import bio from '../../../../assets/icons/bio.png';

// Styles
import { BiographyWrapper } from './styles';

export const Biography = (props) => {
    return (
        <BiographyWrapper>
            <SectionHeader 
                img={bio}
                alt='Biography'
                value='Biography'
            />
            <div className='biography-text'>
                {props.biography}
            </div>
        </BiographyWrapper>
    )
}
