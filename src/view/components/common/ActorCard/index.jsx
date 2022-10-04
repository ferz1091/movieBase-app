// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Assets
import actor_null from '../../../../assets/actor_null.png';

// Styles
import { ActorCardWrapper } from './styles';

export const ActorCard = (actor) => {
    const navigate = useNavigate();
    return (
        <ActorCardWrapper profileURL={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : actor_null}>
                <span 
                    className='actor-photo'
                    onClick={() => navigate(`/person/${actor.id}`)}
                >
                </span>   
                <span>
                    {actor.name}
                </span>
        </ActorCardWrapper>
    )
}