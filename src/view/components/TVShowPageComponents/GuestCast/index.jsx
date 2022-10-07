// Core
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Components
import { InfoProperty } from '../../common';

// Assets
import guest_actors from '../../../../assets/icons/guest_actors.png';
import actor_null from '../../../../assets/actor_null.png';

// Styles
import { GuestCastWrapper, GuestCardWrapper } from './styles';

export const GuestCast = (props) => {
    const [guestInfoIsVisible, setGuestInfoIsVisible] = useState(null);
    return (
        <GuestCastWrapper className='guest-actors'>
            <h2>
                <img 
                    src={guest_actors}
                    alt=''
                />
                Guest actors
            </h2>
            <ul 
                className='guest-list'
                onMouseOut={() => setGuestInfoIsVisible(null)}
            >
                {props.guests.map((guest, index) => 
                    <Link
                        target='_blank'
                        key={guest.id}  
                        to={`/person/${guest.id}`}
                        onMouseOver={() => setGuestInfoIsVisible(index)}
                    >
                        <li>
                            <span className='guest-title'>
                                {guest.name}
                            </span>                   
                            {index === guestInfoIsVisible ?
                                <GuestCardWrapper>
                                    <img 
                                        src={guest.profile_path ? `https://image.tmdb.org/t/p/w500${guest.profile_path}` : actor_null}
                                        alt =''
                                    />
                                    <div className='guest-info'>
                                        <InfoProperty 
                                            class='name'
                                            name='Name: '
                                            value={guest.name}
                                            isVisible={true}
                                        />
                                        <InfoProperty 
                                            class='character'
                                            name='Character: '
                                            value={guest.character}
                                            isVisible={true}
                                        />
                                    </div>
                                </GuestCardWrapper>
                                :
                                null
                            }
                        </li>
                    </Link>
                )}
            </ul>
        </GuestCastWrapper>
    )
}
