// Core
import React from 'react';

// Components
import { Movies, SectionHeader } from '../../common';

// Assets
import similar from '../../../../assets/icons/similar.png';

// Styles
import { SimilarWrapper } from './styles';

export const Similar = (props) => {
    return (
        <SimilarWrapper className='similar'>
            <SectionHeader 
                img={similar}
                value='Reviews'
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
