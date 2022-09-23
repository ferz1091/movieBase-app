// Core
import React from 'react';

// Assets
import actor_null from '../../../../assets/actor_null.png';

// Styles
import { ActorCardWrapper } from './styles';

export const ActorCard = (actor) => {
    console.log(actor);
    return (
        <ActorCardWrapper profileURL={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : actor_null}>
            <span className='actor-photo'>
            </span>
            <span>
                {actor.name}
            </span>
        </ActorCardWrapper>
    )
}