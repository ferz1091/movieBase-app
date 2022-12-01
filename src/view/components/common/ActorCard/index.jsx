// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Assets
import actor_null from '../../../../assets/actor_null.png';

// Styles
import { ActorCardWrapper } from './styles';

export const ActorCard = (actor) => {
    const {styleMode} = useSelector(state => state.general);
    return (
        <ActorCardWrapper 
            profileURL={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : actor_null}
            styleMode={styleMode ? 1 : 0}
        >
            <span 
                className='actor-photo'
                onClick={() => window.open(`/person/${actor.id}`,'_blank')}
            >
            </span>   
            <span>
               {actor.name}
            </span>
            {actor.character ?
                <span className='character'>
                    {actor.character}
                </span>
                :
                null
            }
        </ActorCardWrapper>
    )
}
