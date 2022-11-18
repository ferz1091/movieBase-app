// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { ActorCard, SectionHeader } from '../../';

// Assets
import guest_actors from '../../../../assets/icons/guest_actors.png';

// Styles
import { GuestCastWrapper } from './styles';

export const GuestCast = (props) => {
    const { t } = useTranslation();
    return (
        <GuestCastWrapper className='guest-actors'>
            <SectionHeader 
                img={guest_actors}
                value={t('h2.guests')}
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
