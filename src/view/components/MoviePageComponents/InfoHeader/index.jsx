// Core
import React from 'react';

// Components
import { InfoProperty, Social } from '../../common';

// Styles
import { InfoHeaderWrapper } from './styles';

export const InfoHeader = (props) => {
    return (
        <InfoHeaderWrapper 
            className='info-header'
            vote={props.currentMovie.vote_average}
            backgroundURL={`https://image.tmdb.org/t/p/original${props.currentMovie.backdrop_path}`}
        >
            <h1>
                <div className='title'>
                    {props.currentMovie.title}
                </div>
                <span className='rating'>
                    ★ {props.currentMovie.vote_average.toFixed(1)}
                </span>
            </h1>
            <div className='genres'>
                {props.currentMovie.genres.map(genre =>
                    <span key={genre.id}>
                        {genre.name}
                    </span>
                )}
            </div>
            {props.currentMovie.title !== props.currentMovie.original_title ?
                <div className='original-title'>
                    {props.currentMovie.original_title}
                </div>
                :
                null
            }
            {props.currentMovie.tagline ?
                <div className='tagline'>
                    {`"${props.currentMovie.tagline}"`}
                </div>
                :
                null
            }
            <div className='movie-info'>
                <InfoProperty
                    class='release-date'
                    name='Release date: '
                    value={new Date(props.currentMovie.release_date).toLocaleDateString()}
                    isVisible={true}
                />
                <InfoProperty
                    class='production-country'
                    name='Country: '
                    isVisible={props.currentMovie.production_countries.length}
                    value={props.currentMovie.production_countries.map((country, index, countries) =>
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
                <InfoProperty
                    class='language'
                    name='Language: '
                    isVisible={props.currentMovie.spoken_languages.length}
                    value={props.currentMovie.spoken_languages.map((language, index, languages) =>
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
                <InfoProperty
                    class='director'
                    name='Director: '
                    value={props.currentMovie.crew.find(member => member.job === 'Director').original_name}
                    isVisible={props.currentMovie.crew.find(member => member.job === 'Director')}
                />
                <InfoProperty
                    class='prod_companies'
                    name='Companies: '
                    isVisible={props.currentMovie.production_companies.length}
                    value={props.currentMovie.production_companies.map((company, index, companies) =>
                        <span key={index}>
                            {
                                index + 1 === companies.length ?
                                    <>
                                        {` ${company.name}`}
                                    </>
                                    :
                                    <>
                                        {` ${company.name},`}
                                    </>
                            }
                        </span>
                    )}
                />
                <InfoProperty
                    class='time'
                    name='Time: '
                    value={`${props.currentMovie.runtime} min.`}
                    isVisible={props.currentMovie.runtime}
                />
                <InfoProperty 
                    class='collection'
                    name='Collection: '
                    value={props.currentMovie.collection ? props.currentMovie.collection.name : ''}
                    isVisible={props.currentMovie.collection}
                />
                <Social {...props.currentMovie.social} />
                {props.currentMovie.overview ?
                    <div className='overview'>
                        <u>What is the movie about?</u><br />{props.currentMovie.overview}
                    </div>
                    :
                    null
                }
            </div>
        </InfoHeaderWrapper>
    )
}
