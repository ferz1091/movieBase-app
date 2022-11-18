// Core
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import { InfoProperty, Social } from '../../common';

// Styles
import { InfoHeaderWrapper } from './styles';

export const TVShowInfoHeader = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <InfoHeaderWrapper
            className='info-header'
            vote={props.currentTVShow.vote_average}
            background={props.currentTVShow.backdrop_path}
            backgroundURL={`https://image.tmdb.org/t/p/original${props.currentTVShow.backdrop_path}`}
        >
            <h1>
                <div className='title'>
                    {props.currentTVShow.name}
                </div>
                <span className='rating'>
                    ★ {props.currentTVShow.vote_average.toFixed(1)}
                </span>
            </h1>
            <div className='genres'>
                {props.currentTVShow.genres.map(genre =>
                    <span 
                        key={genre.id}
                        onClick={() => {
                            props.resetCompositionsByParams();
                            props.getTVShowsByParams(genre.id, null, 1, props.lang);
                            navigate('/compositions/1');
                        }}
                    >
                        {genre.name}
                    </span>
                )}
            </div>
            {props.currentTVShow.name !== props.currentTVShow.original_name ?
                <div className='original-title'>
                    {props.currentTVShow.original_name}
                </div>
                :
                null
            }
            {props.currentTVShow.tagline ?
                <div className='tagline'>
                    {`"${props.currentTVShow.tagline}"`}
                </div>
                :
                null
            }
            <div className='movie-info'>
                <InfoProperty 
                    class='status'
                    name={t('tv_show.status')}
                    isVisible={true}
                    value={props.currentTVShow.in_production ? 'In production' : 'Completed'}
                />
                <InfoProperty
                    class='released'
                    name={t('tv_show.air_date')}
                    isVisible={props.currentTVShow.first_air_date}
                    value={new Date(props.currentTVShow.first_air_date).toLocaleDateString()}
                />
                <InfoProperty 
                    class='seasons-number'
                    name={t('tv_show.seasons')}
                    isVisible={props.currentTVShow.number_of_seasons}
                    value={props.currentTVShow.number_of_seasons}
                />
                <InfoProperty 
                    class='episodes-number'
                    name={t('tv_show.episodes')}
                    isVisible={props.currentTVShow.number_of_episodes}
                    value={props.currentTVShow.number_of_episodes}
                />
                <InfoProperty 
                    class='network'
                    name={t('tv_show.network')}
                    isVisible={props.currentTVShow.networks.length}
                    value={props.currentTVShow.networks.map((network, index, networks) =>
                        <span
                            key={network.id}
                        >
                            {
                                index + 1 === networks.length ?
                                    <>
                                        {` ${network.name}`}
                                    </>
                                    :
                                    <>
                                        {` ${network.name},`}
                                    </>
                            }
                        </span>
                    )}
                />
                <InfoProperty
                    class='production-country'
                    name={t('movie.country')}
                    isVisible={props.currentTVShow.production_countries.length}
                    value={props.currentTVShow.production_countries.map((country, index, countries) =>
                        <span key={country.name}>
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
                    isVisible={props.currentTVShow.spoken_languages.length}
                    value={props.currentTVShow.spoken_languages.map((language, index, languages) =>
                        <span key={language.name}>
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
                    class='created-by'
                    name={t('tv_show.created')}
                    value={props.currentTVShow.created_by.map((person, index, crew) =>
                        <NavLink 
                            to={`/person/${person.id}`}
                            key={person.id}
                        >
                            {
                                index + 1 === crew.length ?
                                    <>
                                        {` ${person.name}`}
                                    </>
                                    :
                                    <>
                                        {` ${person.name},`}
                                    </>
                            }
                        </NavLink>    
                    )}
                    isVisible={props.currentTVShow.created_by.length}
                />
                <InfoProperty
                    class='prod_companies'
                    name={t('movie.companies')}
                    isVisible={props.currentTVShow.production_companies.length}
                    value={props.currentTVShow.production_companies.map((company, index, companies) =>
                        <span key={company.id}>
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
                <Social {...props.currentTVShow.social} />
                {props.currentTVShow.overview ?
                    <div className='overview'>
                        <u>{t('tv_show.overview')}</u><br />{props.currentTVShow.overview}
                    </div>
                    :
                    null
                }
            </div>
        </InfoHeaderWrapper>
    )
}
