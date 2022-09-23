// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Assets
import poster_null from '../../../assets/poster_null.jpg';

// Styles
import { MovieWrapper } from './styles';

export const Movies = (movie) => {
    const genres = useSelector(state => state.general.genres);
    const [isHover, toggleIsHover] = useState(false);
    const [isMovieOverviewOpen, toggleIsMovieOverviewOpen] = useState(false);
    return (
        <NavLink to={`/movie/${movie.id}`}>
            <MovieWrapper
                className='movie'
                vote={movie.vote_average}
                onMouseOver={() => toggleIsHover(true)}
                onMouseOut={() => toggleIsHover(false)}
            >
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : poster_null}
                        alt={``}
                    />
                <figcaption>
                    {movie.title.length < 60 ? movie.title : movie.title.slice(0, 59) + '...'}
                </figcaption>
                {isHover ?
                    <div className='movie-info'>
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
                            ★ {movie.vote_average}
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
