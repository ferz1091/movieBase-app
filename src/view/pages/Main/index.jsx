// Core
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useMovies } from '../../../bus/movies';
import { useGeneral } from '../../../bus/general';

// Components
import { Movies, PageSwitcher } from '../../components';

// Styles
import { MainWrapper } from './styles';

export const Main = () => {
    const { mode, page } = useParams();
    const { lang, isFetching, genres } = useSelector(state => state.general);
    const movies = useSelector(state => state.movies);
    const modeData = movies.find(item => item.name === mode).data.find(item => item.page === page);
    const { getMovies } = useMovies();
    const { getGenres } = useGeneral();
    useEffect(() => {
        if (!genres.length) {
            getGenres();
        }
        if (!movies.find(item => item.name === mode).data.some(item => item.page === page && item.data.length > 0)) {
            getMovies(mode, page, lang, movies.find(movie => movie.name === mode).totalPages);
        }
    }, [mode, page, lang])
    
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else {
        return (
            <MainWrapper className='Main page'>
                {modeData ?
                    (modeData.data ?
                        movies.find(movie => movie.name === mode).data.find(movie => movie.page === page).data.map(movie =>
                            <Movies
                                key={movie.id}
                                {...movie}
                            />
                        )
                        :
                        <div>
                            {modeData.error}
                        </div>
                    )
                    :
                    null
                }
                {movies.find(item => item.name === mode).totalPages ?
                    <PageSwitcher
                        page={Number(page)}
                        mode={mode}
                        totalPages={movies.find(item => item.name === mode).totalPages}
                    />
                    :
                    null
                }
            </MainWrapper>
        )
    }
}
