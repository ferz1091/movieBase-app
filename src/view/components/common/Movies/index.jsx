// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../../bus/general';

// Assets
import poster_null from '../../../../assets/poster_null.jpg';

// Styles
import { MovieWrapper } from './styles';

export const Movies = (movie) => {
    const genres = useSelector(state => state.general.genres);
    const { getGenres } = useGeneral();
    const [isHover, toggleIsHover] = useState(false);
    const [isMovieOverviewOpen, toggleIsMovieOverviewOpen] = useState(false);
    useEffect(() => {
        if (!genres.length) {
            getGenres();
        }
    }, [])
    return (
        <NavLink to={movie.tv ? `/tv/${movie.id}` : `/movie/${movie.id}`}>
            <MovieWrapper
                className='movie'
                vote={movie.vote_average}
                onMouseOver={() => toggleIsHover(true)}
                onMouseOut={() => toggleIsHover(false)}
            >
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : poster_null}
                        alt=''
                    />
                <figcaption>
                    {movie.title ? movie.title.length < 50 ? movie.title : movie.title.slice(0, 49) + '...' : movie.name.length < 50 ? movie.name : movie.name.slice(0, 49)}
                </figcaption>
                {isHover ?
                    <div className='movie-info-header'>
                        <div className='genre'>
                            {movie.genre_ids.length > 0 ?
                                <span>
                                    {genres.find(genre => genre.id === movie.genre_ids[0]).name}
                                </span>
                                :
                                null
                            }
                            {movie.genre_ids.length > 1 ?
                                <span>
                                    {genres.find(genre => genre.id === movie.genre_ids[1]).name}
                                </span>
                                :
                                null
                            }
                        </div>
                        <div className='vote'>
                            ★ {movie.vote_average % 1 === 1 ? movie.vote_average : movie.vote_average.toFixed(1)}
                        </div>
                    </div>
                    : 
                    null
                }
                {isHover ? 
                    <div 
                        className='movie-overview'
                        onMouseOver={() => toggleIsMovieOverviewOpen(true)}
                        onMouseOut={() => toggleIsMovieOverviewOpen(false)}
                    >
                            🛈
                            {isMovieOverviewOpen ?
                                <span className='overview-text'>
                                    {movie.overview.slice(0, 100) + '...'}
                                </span>
                                :
                                 null
                            }
                    </div>
                    :
                    null
                }
            </MovieWrapper>
        </NavLink>
    )
}
