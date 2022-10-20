// Core
import React from 'react';

// Components
import {  ActorCard } from '../../';

// Assets
import guest_actors from '../../../../assets/icons/guest_actors.png';

// Styles
import { GuestCastWrapper } from './styles';

export const GuestCast = (props) => {
    return (
        <GuestCastWrapper className='guest-actors'>
            <h2>
                <img 
                    src={guest_actors}
                    alt=''
                />
                Guest actors
            </h2>
            <div className='guest-list'>
                {props.guests.slice(0, 12).map(guest => 
                    <ActorCard 
                        key={guest.id + '*'} 
                        {...guest}
                    />
                )}
            </div>
        </GuestCastWrapper>
    )
}
