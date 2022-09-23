// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../../bus/general';

// Styles
import { HeaderWrapper } from './styles';

export const Header = () => {
    const { switchMode } = useGeneral();

    return (
        <HeaderWrapper>
            <div className='Switch-mode'>
                <NavLink to='/popular/1'>
                    Popular
                </NavLink>
                <NavLink to='/top_rated/1'>
                    Top rated
                </NavLink>
                <NavLink to='/upcoming/1'>
                    Upcoming
                </NavLink>
                <NavLink to='/now_playing/1'>
                    Now playing
                </NavLink>
            </div>
        </HeaderWrapper>
    )
}