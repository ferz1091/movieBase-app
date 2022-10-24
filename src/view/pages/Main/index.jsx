// Core
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useMovies } from '../../../bus/movies';
import { useGeneral } from '../../../bus/general';
import { useTVShows } from '../../../bus/tv_shows';

// Components
import { CompositionsList } from '../../components';

// Styles
import { MainWrapper } from './styles';

export const Main = () => {
    const { category, page } = useParams();
    const { lang, isFetching, genres, mode } = useSelector(state => state.general);
    const movies = useSelector(state => state.movies);
    const tv_shows = useSelector(state => state.tv);
    const { getMovies } = useMovies();
    const { getTVShows } = useTVShows();
    const { getGenres } = useGeneral();
    useEffect(() => {
        if (!genres.length) {
            getGenres();
        }
        if (mode && !tv_shows.find(item => item.name === category).data.some(item => item.page === page && item.data.length > 0)) {
            getTVShows(category, page, lang, tv_shows.find(movie => movie.name === category).totalPages, mode);
        } else if (!mode && !movies.find(item => item.name === category).data.some(item => item.page === page && item.data.length > 0)) {
            getMovies(category, page, lang, movies.find(movie => movie.name === category).totalPages, mode);
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
            <MainWrapper className='Main page'>
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
