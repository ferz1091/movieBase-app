// Core
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { Spinner } from '../';

// Styles
import { SearchStringWrapper, RatingWrapper } from './styles';
import { CSSTransition } from 'react-transition-group';

export const SearchString = (props) => {
    const nodeRef = useRef();
    const searchRef = useRef();
    const [isFocusSearch, toggleIsFocusSearch] = useState(false);
    const [searchString, setSearchString] = useState('');
    const location = useLocation();
    useEffect(() => {
        if (props.searchResults.length) {
            props.resetSearchResults();
        }
        if (searchString.length > 2) {
            props.getCurrentSearchResultByString(searchString, 1, props.lang);
        }
    }, [searchString])
    useEffect(() => {
        searchRef.current.value = '';
        setSearchString('');
    }, [location.pathname])
    return ( 
        <>
            {!isFocusSearch ?
                <span
                    className='search-button'
                    onClick={() => toggleIsFocusSearch(true)}
                >
                </span>
                :
                null
            }
            <CSSTransition
                in={isFocusSearch}
                timeout={300}
                nodeRef={nodeRef}
                classNames='search'
            >
                <SearchStringWrapper 
                    className={isFocusSearch ? 'search-focused' : 'search'}
                    ref={nodeRef}
                >
                    <input
                        onFocus={() => toggleIsFocusSearch(true)}
                        onBlur={() => setTimeout(() => {
                            toggleIsFocusSearch(false)
                        }, 500)}
                        ref={searchRef}
                        type='text'
                        onChange={() => setSearchString(searchRef.current.value)}
                        placeholder={props.t('switch_category.search')}
                    />
                    {props.isFetching.search ?
                        <Spinner />
                        :
                        null
                    }
                    <div className='search-results'>
                        {!props.isFetching.search ?
                            (props.searchResults.length && isFocusSearch ?
                                (props.searchResults.slice(0, 5).map(result =>
                                    <div
                                        className='result'
                                        key={result.id}
                                        onClick={() => {
                                            toggleIsFocusSearch(false);
                                            props.navigate(result.title ? `/movie/${result.id}` : `/tv/${result.id}`);
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
                                (searchString.length > 2 && !props.searchResults.length && !props.searchResults.error && isFocusSearch ?
                                    <div className='result-no-matches'>
                                        {props.t('searchString.no_matches')}
                                    </div>
                                    :
                                    (props.searchResults.error && isFocusSearch ?
                                        <div className='result-error'>
                                            {props.t('searchString.error')}
                                        </div>
                                        :
                                        null
                                    )
                                )
                            )
                            :
                            null
                        }
                    </div>
                </SearchStringWrapper>
            </CSSTransition>
        </>
    )
}
