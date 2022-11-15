// Core
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Bus
import { useGeneral } from '../../../../bus/general';

// Components
import { CustomSearch, Switch } from '../';

// Assets
import logo_light from '../../../../assets/icons/logo-light.png'
import logo_dark from '../../../../assets/icons/logo-dark.png'

// Styles
import { HeaderWrapper, RatingWrapper } from './styles';

export const Header = () => {
    const { 
        switchMode, 
        getCurrentSearchResultByString, 
        resetSearchResults, 
        getMoviesByParams, 
        getTVShowsByParams, 
        resetCompositionsByParams,
        toggleStyle } = useGeneral();
    const navigate = useNavigate();
    const { mode, lang, searchResults, isFetching, genres, categoryValue, styleMode } = useSelector(state => state.general);
    const searchRef = useRef();
    const [searchString, setSearchString] = useState('');
    const [isFocusSearch, toggleIsFocusSearch] = useState(false);
    const [genresMode, setGenresMode] = useState(null);
    const location = useLocation();
    useEffect(() => {
        if (searchResults.length) {
            resetSearchResults();
        }
        if (searchString.length > 2) {
            getCurrentSearchResultByString(searchString, 1, lang);
        }
    }, [searchString])
    useEffect(() => {
        searchRef.current.value = '';
        setSearchString('');
    }, [location.pathname])
    return (
        <HeaderWrapper styleMode={styleMode} >
            <div className='logo'>
                <img 
                    src={styleMode ? logo_dark : logo_light}
                    alt=''
                    onClick={() => navigate('/popular/1')}
                />
            </div>
            <div className='Switch-mode'>
                <input 
                    type='checkbox' 
                    checked={!mode ? true : false}
                    onClick={() => {
                        if (mode) {
                            switchMode(false);
                            navigate('popular/1');
                        }
                    }}
                    readOnly={true}
                />
                <span 
                    className={!mode ? 'mode active' : 'mode'}
                    onMouseOver={() => {
                        if (genres.length) {
                            setGenresMode('movies')
                        }
                    }}
                    onMouseOut={() => setGenresMode(null)}
                >
                    Movies
                    {genresMode === 'movies' ?
                        <>
                            <span className='arrow-up'>
                            </span>
                            <div className='panel'>
                                <div className='genres'>
                                    {genres.length ? 
                                        (genres.filter(genre => !genre.mode).map(genre =>
                                            <span 
                                                className='genre'
                                                key={genre.id}
                                                onClick={() => {
                                                    setGenresMode(null);
                                                    resetCompositionsByParams();
                                                    getMoviesByParams(genre.id, null, 1, lang);
                                                    navigate('/compositions/1');
                                                }}
                                            >
                                                {genre.name}
                                            </span>
                                        ))
                                        :
                                        null
                                    }
                                </div>
                                {genres.length ?
                                    <CustomSearch 
                                        genres={genres.filter(genre => !genre.mode)} 
                                        getCompositionsByParams={getMoviesByParams}
                                        lang={lang}
                                        resetCompositionsByParams={resetCompositionsByParams}
                                        navigate={navigate}
                                        styleMode={styleMode ? 1 : 0}
                                    /> 
                                    : 
                                    null
                                }
                            </div>
                        </>
                        :
                        <span className='arrow-down'>
                        </span>
                    }
                </span>
                <input 
                    type='checkbox'
                    checked={mode ? true : false}
                    onClick={() => {
                        if (!mode) {
                            switchMode(true);
                            navigate('popular/1');
                        }
                    }}
                    readOnly={true}
                />
                <span
                    className={mode ? 'mode active' : 'mode'}
                    onMouseOver={() => {
                        if (genres.length) {
                            setGenresMode('tv')
                        }
                    }
                    }
                    onMouseOut={() => setGenresMode(null)}
                >
                    TV Shows
                    {genresMode === 'tv' ?
                        <>
                            <span className='arrow-up'>
                            </span>
                            <div className='panel'>
                                <div className='genres'>
                                    {genres.length ?
                                        (genres.filter(genre => genre.mode).map(genre =>
                                            <span 
                                                className='genre'
                                                key={genre.id}
                                                onClick={() => {
                                                    setGenresMode(null);
                                                    resetCompositionsByParams();
                                                    getTVShowsByParams(genre.id, null, 1, lang);
                                                    navigate('/compositions/1');
                                                }}
                                            >
                                                {genre.name}
                                            </span>
                                        ))
                                        :
                                        null
                                    }
                                </div>
                                <CustomSearch 
                                    genres={genres.filter(genre => genre.mode)} 
                                    getCompositionsByParams={getTVShowsByParams}
                                    lang={lang}
                                    resetCompositionsByParams={resetCompositionsByParams}
                                    navigate={navigate}
                                    styleMode={styleMode ? 1 : 0}
                                />
                            </div>
                        </>
                        :
                        <span className='arrow-down'>
                        </span>
                    }
                </span>
                <Switch
                    toggleStyle={toggleStyle}
                    styleMode={styleMode} 
                />
            </div>
            <div className='Switch-category'>
                <NavLink
                    className={categoryValue === 'popular' ? 'active' : null}
                    to='/popular/1'
                >
                    Popular
                </NavLink>
                <NavLink 
                    className={categoryValue === 'top_rated' ? 'active' : null}
                    to='/top_rated/1'
                >
                    Top rated
                </NavLink>
                {mode ? 
                    null
                    :
                    <>
                        <NavLink 
                            className={categoryValue === 'upcoming' ? 'active' : null}
                            to='/upcoming/1'
                        >
                            Upcoming
                        </NavLink>
                        <NavLink 
                            className={categoryValue === 'now_playing' ? 'active' : null}
                            to='/now_playing/1'
                        >
                            Now playing
                        </NavLink>
                    </>
                }
            </div>
            {!isFocusSearch ?
                <span 
                    className='search-button'
                    onClick={() => toggleIsFocusSearch(true)}
                >
                </span>
                :
                null
            }      
            <div className={isFocusSearch ? 'search-focused' : 'search'}>
                <input
                    onFocus={() => toggleIsFocusSearch(true)}
                    onBlur={() => setTimeout(() => {
                        toggleIsFocusSearch(false)
                    }, 500)}
                    ref={searchRef} 
                    type='text' 
                    onChange={() => setSearchString(searchRef.current.value)} 
                    placeholder='Search movies and series'
                />
                <div className='search-results'>
                    {!isFetching.search ? 
                        (searchResults.length && isFocusSearch ?
                            (searchResults.slice(0, 5).map(result =>
                                <div 
                                    className='result'
                                    key={result.id}
                                    onClick={() => {
                                        toggleIsFocusSearch(false);
                                        navigate(result.title ? `/movie/${result.id}` : `/tv/${result.id}`);
                                    }}
                                >
                                    {result.title ? 
                                        result.title.length > 59 ? 
                                            `${result.title.slice(0, 59)}...` 
                                            : 
                                            result.title 
                                        : 
                                        result.name.length > 59 ? 
                                            `${result.name.slice(0, 59)}...` 
                                            : 
                                            result.name
                                    }
                                    <RatingWrapper
                                        vote={result.vote_average}
                                        className='rating'
                                    >
                                        ★ {result.vote_average}
                                    </RatingWrapper>
                                </div>
                            ))
                            :
                            (searchString.length > 2 && !searchResults.length && !searchResults.error ?
                                <div className='result-no-matches'>
                                    No matches found
                                </div>
                                :
                                (searchResults.error ?
                                    <div className='result-error'>
                                        Something goes wrong
                                    </div>
                                    :
                                    null    
                                )
                            )
                        )
                        :
                        <div>SPINNER</div>
                    }
                </div>
            </div>
        </HeaderWrapper>
    )
}
