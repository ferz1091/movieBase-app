// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { SectionHeader } from '../../common';

// Assets
import bio from '../../../../assets/icons/bio.png';

// Styles
import { BiographyWrapper } from './styles';

export const Biography = (props) => {
    const { t } = useTranslation();
    return (
        <BiographyWrapper>
            <SectionHeader 
                img={bio}
                alt='Biography'
                value={t('h2.bio')}
            />
            <div className='biography-text'>
                {props.biography}
            </div>
        </BiographyWrapper>
    )
}
