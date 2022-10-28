// Core
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Bus
import { useGeneral } from '../../../../bus/general';

// Styles
import { HeaderWrapper } from './styles';

export const Header = () => {
    const { switchMode, getCurrentSearchResultByString, resetSearchResults } = useGeneral();
    const navigate = useNavigate();
    const { mode, lang, searchResults } = useSelector(state => state.general);
    const searchRef = useRef();
    const [searchString, setSearchString] = useState('');
    useEffect(() => {
        if (searchResults.length) {
            resetSearchResults();
        }
        if (searchString.length >= 3) {
            getCurrentSearchResultByString(searchString, 1, lang);
        }
    }, [searchString])
    return (
        <HeaderWrapper>
            <div className='Switch-mode'>
                <span 
                    className={!mode ? 'mode active' : 'mode'}
                    onClick={() => {
                        switchMode(false)
                        navigate('/popular/1');
                    }}
                >
                    Movies
                </span>
                <span 
                    className={mode ? 'mode active' : 'mode'}
                    onClick={() => {
                        switchMode(true);
                        navigate('/popular/1');
                    }}
                >
                    TV Shows
                </span>
            </div>
            <div className='Switch-category'>
                <NavLink
                    to='/popular/1'>
                    Popular
                </NavLink>
                <NavLink to='/top_rated/1'>
                    Top rated
                </NavLink>
                {mode ? 
                    null
                    :
                    <>
                        <NavLink to='/upcoming/1'>
                            Upcoming
                        </NavLink>
                        <NavLink to='/now_playing/1'>
                            Now playing
                        </NavLink>
                    </>
                }
            </div>
            <div className='search'>
                <input 
                    ref={searchRef} 
                    type='text' 
                    onChange={() => setSearchString(searchRef.current.value)} 
                    placeholder='Text something'
                />
            </div>
        </HeaderWrapper>
    )
}