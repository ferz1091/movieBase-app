// Core
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { InfoProperty, Social } from '../../common';

// Styles
import { InfoHeaderWrapper } from './styles';

export const MovieInfoHeader = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <InfoHeaderWrapper 
            className='info-header'
            vote={props.currentMovie.vote_average}
            background={props.currentMovie.backdrop_path}
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
                    <span 
                        key={genre.id}
                        onClick={() => {
                            props.resetCompositionsByParams();
                            props.getMoviesByParams(genre.id, null, 1, props.lang);
                            navigate('/compositions/1');
                        }}
                    >
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
                    name={t('movie.release')}
                    value={new Date(props.currentMovie.release_date).toLocaleDateString()}
                    isVisible={true}
                />
                <InfoProperty
                    class='production-country'
                    name={t('movie.country')}
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
                    name={t('movie.language')}
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
                {!props.currentMovie.crew.error && props.currentMovie.crew.find(member => member.job === 'Director') ?
                    <InfoProperty
                    class='director'
                    name={t('movie.director')}
                    value={
                            <Link 
                                to={`/person/${props.currentMovie.crew.find(member => member.job === 'Director').id}`}
                                target='_blank'
                            >
                                {props.currentMovie.crew.find(member => member.job === 'Director').original_name}
                            </Link>
                            }
                    isVisible={props.currentMovie.crew.find(member => member.job === 'Director')}
                    />
                    :
                    null
                }
                <InfoProperty
                    class='prod_companies'
                    name={t('movie.companies')}
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
                    name={t('movie.time')}
                    value={`${props.currentMovie.runtime} min.`}
                    isVisible={props.currentMovie.runtime}
                />
                <InfoProperty 
                    class='collection'
                    name={t('movie.collection')}
                    value={props.currentMovie.belongs_to_collection ? <Link to={`/collection/${props.currentMovie.belongs_to_collection.id}`}>{props.currentMovie.belongs_to_collection.name}</Link> : ''}
                    isVisible={props.currentMovie.belongs_to_collection}   
                />
                <Social {...props.currentMovie.social} />
                {props.currentMovie.overview ?
                    <div className='overview'>
                        <u>{t('movie.overview')}</u><br />{props.currentMovie.overview}
                    </div>
                    :
                    null
                }
            </div>
        </InfoHeaderWrapper>
    )
}
