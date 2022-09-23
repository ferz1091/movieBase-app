// Core
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Component
import { InfoProperty, InfoBar } from '../../components';

// Styles
import { MoviePageWrapper } from './styles';

export const MoviePage = () => {
    const { lang, currentMovie, isFetching, genres } = useSelector(state => state.general);
    const { id } = useParams();
    const { getCurrentMovie } = useGeneral();
    useEffect(() => {
        if (!currentMovie || currentMovie.id !== id)
            getCurrentMovie(id, lang);
    }, [id, lang])

    if (isFetching) {
        return (
            <div>
                SPINNER
            </div>
        )
    }
    else if (currentMovie) {
        return (
            <MoviePageWrapper
                backgroundURL={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
                vote={currentMovie.vote_average}
                title_length={currentMovie.title.length}
            >
                {currentMovie ?
                    currentMovie.error ?
                        <div>
                            {currentMovie.error}
                        </div>
                        :
                        <>
                            <h1>
                                <div className='title'>
                                    {currentMovie.title}
                                </div>
                                <span className='rating'>
                                    ★ {currentMovie.vote_average.toFixed(1)}
                                </span>
                            </h1>
                            <div className='genres'>
                                {currentMovie.genres.map(genre =>
                                    <span key={genre.id}>
                                        {genre.name}
                                    </span>
                                )}
                            </div>
                            {
                                currentMovie.title !== currentMovie.original_title ?
                                <div className='original-title'>
                                    {currentMovie.original_title}
                                </div>
                                :
                                null
                            }
                            {currentMovie.tagline ?
                                <div className='tagline'>
                                    {`"${currentMovie.tagline}"`}
                                </div>
                                :
                                null
                            }
                            <div className='movie-info'>
                                <InfoProperty
                                    class='release-date'
                                    name='Release date: '
                                    value={new Date(currentMovie.release_date).toLocaleDateString()}
                                />
                                {currentMovie.production_countries.length > 0 ?
                                    <InfoProperty 
                                        class = 'production-country'
                                        name = 'Country: '
                                        value = {currentMovie.production_countries.map((country, index, countries) =>
                                                <span key={index}>
                                                    {
                                                        index + 1 === countries.length ?
                                                        <>
                                                            {` ${country.name}`}
                                                        </>
                                                        :
                                                        <>
                                                            {` ${country.name},`}
                                                        </>
                                                    }
                                                </span>
                                            )}
                                    />
                                    :
                                    null
                                }
                                {currentMovie.spoken_languages.length > 0 ? 
                                    <InfoProperty
                                        class = 'language'
                                        name = 'Language: '
                                        value = {currentMovie.spoken_languages.map((language, index, languages) => 
                                            <span key={index}>
                                                {
                                                    index + 1 === languages.length ? 
                                                    <>
                                                        {` ${language.english_name}`}
                                                    </>
                                                    :
                                                    <>
                                                        {` ${language.english_name},`}
                                                    </>
                                                }
                                            </span>
                                            )}
                                    />
                                    :
                                    null
                                }
                                {currentMovie.crew.find(member => member.job === 'Director') ? 
                                    <InfoProperty 
                                        class = 'director'
                                        name = 'Director: '
                                        value = {currentMovie.crew.find(member => member.job === 'Director').original_name}
                                    />
                                    :
                                    null
                                }
                                <InfoProperty 
                                    class = 'time'
                                    name = 'Time: '
                                    value = {`${currentMovie.runtime} min.`}
                                />
                                {currentMovie.overview ? 
                                    <div className='overview'>
                                        What is the movie about?<br/>{currentMovie.overview}
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </>
                    :
                    null
                }
                <InfoBar movie={currentMovie}/>
            </MoviePageWrapper>
        )
    }
}
