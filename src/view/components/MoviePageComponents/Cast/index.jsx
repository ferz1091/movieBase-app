// Core
import React from 'react';

// Components
import { ActorCard, SectionHeader } from '../../common';

// Assets
import actors from '../../../../assets/icons/actors.png';

// Styles
import { CastWrapper } from './styles';

export const Cast = (props) => {
    return (
        <CastWrapper 
            className='cast' 
            styleMode={props.styleMode}
        >
            <SectionHeader 
                img={actors}
                value='Starring'
                alt='Starring'
            />
            <div className='cast-list'>
                {props.cast.slice(0, 12).map(actor =>
                    <ActorCard 
                        key={actor.id} 
                        {...actor}
                    />
                )}
            </div>
        </CastWrapper>
    )
}
