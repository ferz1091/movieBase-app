// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Movies, SectionHeader } from '../../common';

// Assets
import similar from '../../../../assets/icons/similar.png';

// Styles
import { SimilarWrapper } from './styles';

export const Similar = (props) => {
    const { t } = useTranslation();
    return (
        <SimilarWrapper className='similar'>
            <SectionHeader 
                img={similar}
                value={t('h2.similar')}
                alt='Similar'
            />
            <div className='similar-list'>
                {props.currentMovie.similar.map(movie =>
                    <Movies
                        key={movie.id}
                        {...movie}
                        tv={props.tv ? true : false}
                    />
                )}
            </div>
        </SimilarWrapper>
    )
}
