// Core
import React, { useEffect } from 'react';

// Components
import { CompositionsList } from '../../components';

// Tools
import { useMain } from '../../../tools';

// Styles
import { MainWrapper } from './styles';

export const Main = () => {
    const { category,
            page,
            lang,
            isFetching,
            genres,
            mode,
            movies,
            tv_shows,
            getMovies,
            getTVShows,
            categoryValue,
            setCategory,
            styleMode } = useMain();
    useEffect(() => {
        if (category !== categoryValue) {
            setCategory(category);
        }
    }, [category])
    useEffect(() => {
        if (mode && !tv_shows.find(item => item.name === category).data.some(item => item.page === page && item.data.length > 0)) {
            getTVShows(category, page, lang, tv_shows.find(movie => movie.name === category).totalPages);
        } else if (!mode && !movies.find(item => item.name === category).data.some(item => item.page === page && item.data.length > 0)) {
            getMovies(category, page, lang, movies.find(movie => movie.name === category).totalPages, !genres.length);
        }
    }, [mode, category, page])
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else {
        return (
            <MainWrapper 
                className='Main page'
                styleMode={styleMode ? 1 : 0}
            >
                {mode ? 
                    <CompositionsList 
                        modeData={tv_shows.find(item => item.name === category).data.find(item => item.page === page)}
                        compositionsData={tv_shows}
                        category={category}
                        page={page}
                        mode={mode}
                    />
                    :
                    <CompositionsList 
                        modeData={movies.find(item => item.name === category).data.find(item => item.page === page)}
                        compositionsData={movies}
                        category={category}
                        page={page}
                        mode={mode}
                    />
                }
            </MainWrapper>
        )
    }
}
