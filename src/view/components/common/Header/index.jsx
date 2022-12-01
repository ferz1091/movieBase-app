// Core
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

// Bus
import { useGeneral } from '../../../../bus/general';
import { useMovies } from '../../../../bus/movies';
import { useTVShows } from '../../../../bus/tv_shows';

// Components
import { CustomSearch, Switch, Spinner, SearchString } from '../';

// Constants
import { languages } from '../../../../init/constants';

// Assets
import logo_light from '../../../../assets/icons/logo-light.png'
import logo_dark from '../../../../assets/icons/logo-dark.png'

// Styles
import { HeaderWrapper, RatingWrapper, LangSelect } from './styles';
import { CSSTransition } from 'react-transition-group';

export const Header = () => {
    const { 
        switchMode, 
        getCurrentSearchResultByString, 
        resetSearchResults, 
        getMoviesByParams, 
        getTVShowsByParams, 
        resetCompositionsByParams,
        toggleStyle,
        toggleLanguage,
        resetGenres } = useGeneral();
    const { resetMovies } = useMovies();
    const { resetTVShows } = useTVShows();
    const navigate = useNavigate();
    const { mode, 
            lang, 
            searchResults, 
            isFetching, 
            genres, 
            categoryValue, 
            styleMode } = useSelector(state => state.general);
    const selectRef = useRef();
    const moviesPanel = useRef();
    const tvPanel = useRef();
    const [genresMode, setGenresMode] = useState(null);
    const [langSelectIsOpen, toggleLangSelect] = useState(false);
    const { t } = useTranslation();
    return (
        <HeaderWrapper 
            styleMode={styleMode}
            langSelectIsOpen={langSelectIsOpen}
            genresMode={genresMode}
        >
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
                            setGenresMode('movies');
                        }
                    }}
                    onMouseOut={() => {
                            setGenresMode(null);
                    }}
                >
                    {t('switch_mode.movies')}
                    <span className={genresMode === 'movies' ? 'arrow-up' : 'arrow-down'}></span>
                    <CSSTransition
                        in={genresMode === 'movies'}
                        timeout={100}
                        classNames='panel'
                        nodeRef={moviesPanel}
                        unmountOnExit
                    >
                            <div className='panel' ref={moviesPanel}>
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
                        </CSSTransition>
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
                            setGenresMode('tv');
                        }
                    }}
                    onMouseOut={() => setGenresMode(null)}
                >
                    {t('switch_mode.tv_shows')}
                    <span className={genresMode === 'tv' ? 'arrow-up' : 'arrow-down'}></span>
                    <CSSTransition
                        in={genresMode === 'tv'}
                        timeout={100}
                        classNames='panel'
                        nodeRef={tvPanel}
                        unmountOnExit
                    >
                        <div className='panel' ref={tvPanel}>
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
                    </CSSTransition>
                </span>
                <CSSTransition
                    in={langSelectIsOpen}
                    timeout={300}
                    nodeRef={selectRef}
                    classNames='select'
                >
                    <LangSelect
                        className='lang-select'
                        ref={selectRef}
                        styleMode={styleMode}
                        langSelectIsOpen={langSelectIsOpen}
                    >
                        <span
                            className='option current'
                            onClick={() => {
                                if (!langSelectIsOpen) {
                                    toggleLangSelect(true);
                                } else {
                                    toggleLangSelect(false);
                                }
                            }}
                        >
                            {languages.find(language => language.iso === lang).name}
                            <span className={langSelectIsOpen ? 'arrow-lang-up' : 'arrow-lang-down'}>
                            </span>
                        </span>
                        {langSelectIsOpen ? 
                            languages.filter(language => language.iso !== lang).map(language => 
                                <span 
                                    className='option'
                                    key={language.iso}
                                    onClick={() => {
                                        i18n.changeLanguage(language.iso)
                                        toggleLanguage(language.iso);
                                        resetGenres();
                                        resetMovies();
                                        resetTVShows();
                                        toggleLangSelect(false);
                                    }}
                                >
                                    {language.name}
                                </span>
                            )
                            :
                            null
                        }
                    </LangSelect>
                </CSSTransition>
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
                    {t('switch_category.popular')}
                </NavLink>
                <NavLink 
                    className={categoryValue === 'top_rated' ? 'active' : null}
                    to='/top_rated/1'
                >
                    {t('switch_category.top_rated')}
                </NavLink>
                {mode ? 
                    null
                    :
                    <>
                        <NavLink 
                            className={categoryValue === 'upcoming' ? 'active' : null}
                            to='/upcoming/1'
                        >
                            {t('switch_category.upcoming')}
                        </NavLink>
                        <NavLink 
                            className={categoryValue === 'now_playing' ? 'active' : null}
                            to='/now_playing/1'
                        >
                            {t('switch_category.now_playing')}
                        </NavLink>
                    </>
                }
            </div>
            <SearchString 
                navigate={navigate} 
                isFetching={isFetching} 
                searchResults={searchResults}
                resetSearchResults={resetSearchResults}
                getCurrentSearchResultByString={getCurrentSearchResultByString}
                lang={lang}
                t={t}
            />
        </HeaderWrapper>
    )
}
