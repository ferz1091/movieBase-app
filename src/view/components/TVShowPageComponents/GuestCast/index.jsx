// Core
import React from 'react';

// Components
import { ActorCard, SectionHeader } from '../../';

// Assets
import guest_actors from '../../../../assets/icons/guest_actors.png';

// Styles
import { GuestCastWrapper } from './styles';

export const GuestCast = (props) => {
    return (
        <GuestCastWrapper className='guest-actors'>
            <SectionHeader 
                img={guest_actors}
                value='Guest actors'
                alt='Guests'
            />
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
