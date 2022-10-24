// Core
import React from 'react';

// Components
import { Movies } from '../../common';

// Assets
import similar from '../../../../assets/icons/similar.png';

// Styles
import { SimilarWrapper } from './styles';

export const Similar = (props) => {
    return (
        <SimilarWrapper className='similar'>
            <h2>
                <img
                    src={similar}
                    alt=''
                />
                Similar
            </h2>
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
