// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import { InfoProperty, Social } from '../../common';

// Styles
import { InfoHeaderWrapper } from './styles';

export const TVShowInfoHeader = (props) => {
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
                    <span key={genre.id}>
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
                    name='Status: '
                    isVisible={true}
                    value={props.currentTVShow.in_production ? 'In production' : 'Completed'}
                />
                <InfoProperty
                    class='released'
                    name='First air date: '
                    isVisible={props.currentTVShow.first_air_date}
                    value={new Date(props.currentTVShow.first_air_date).toLocaleDateString()}
                />
                <InfoProperty 
                    class='seasons-number'
                    name='Seasons: '
                    isVisible={props.currentTVShow.number_of_seasons}
                    value={props.currentTVShow.number_of_seasons}
                />
                <InfoProperty 
                    class='episodes-number'
                    name='Episodes: '
                    isVisible={props.currentTVShow.number_of_episodes}
                    value={props.currentTVShow.number_of_episodes}
                />
                <InfoProperty 
                    class='network'
                    name='Network: '
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
                    name='Country: '
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
                    name='Language: '
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
                    name='Created by: '
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
                    name='Companies: '
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
                        <u>What is the TV Show about?</u><br />{props.currentTVShow.overview}
                    </div>
                    :
                    null
                }
            </div>
        </InfoHeaderWrapper>
    )
}
