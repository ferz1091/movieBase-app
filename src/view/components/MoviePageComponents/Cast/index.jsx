// Core
import React from 'react';

// Components
import { ActorCard } from '../../common';

// Assets
import actors from '../../../../assets/icons/actors.png';

// Styles
import { CastWrapper } from './styles';

export const Cast = (props) => {
    return (
        <CastWrapper className='cast'>
            <h2>
                <img
                    src={actors}
                    alt=''
                />
                Starring
            </h2>
            <div className='cast-list'>
                {props.cast.slice(0, 12).map(actor =>
                    <ActorCard key={actor.id} {...actor} />
                )}
            </div>
        </CastWrapper>
    )
}
