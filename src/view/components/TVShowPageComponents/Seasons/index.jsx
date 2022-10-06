// Core
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import { InfoProperty, Cast } from '../../';

// Tools
import { useMovie, deleteDuplicates } from '../../../../tools';

// Assets
import seasons from '../../../../assets/icons/seasons.png';
import episodes from '../../../../assets/icons/episodes.png';

// Styles
import { SeasonsWrapper } from './styles';

export const Seasons = () => {
    const { currentTVShow, lang, getSeason, id, isFetching } = useMovie();
    const [activeSeason, setActiveSeason] = useState(null);
    const [activeEpisode, setActiveEpisode] = useState(null);
    const ref = useRef();
    useEffect(() => {
        if (typeof activeSeason === 'number' && !currentTVShow.seasons[activeSeason].isLoaded) {
            getSeason(id, activeSeason, lang)
        }
    }, [activeSeason])
    return (
        <SeasonsWrapper>
            <h2>
                <img
                    src={seasons}
                    alt=''
                />
                Seasons
            </h2>
            <div className='seasons-list'>
                {currentTVShow.seasons.map((season, index) =>
                    <div
                        key={season.id}
                        className={activeSeason === index ? 'season active' : 'season'}
                    >
                        <div 
                            className='head'
                            onClick={() => {
                                if (activeSeason === index) {
                                    setActiveSeason(null);
                                    setActiveEpisode(null);
                                } else {
                                    setActiveSeason(index);
                                    setActiveEpisode(null);
                                }
                            }}
                        >
                            <span className='season-name'>
                                {season.name}
                            </span>
                            {activeSeason === index ?
                                <span className='arrow-up'>
                                </span>
                                :
                                <span className='arrow-down'>
                                </span>
                            }
                        </div>
                        {activeSeason === index ?
                            isFetching.seasons ?
                                <div>
                                    SPINNEr
                                </div>
                                :
                                (season.error ?
                                <div className='error'>
                                    {season.error}
                                </div>
                                :
                                <>
                                    <div className='season-header'>
                                        <div>
                                            <InfoProperty
                                                class='air-date'
                                                name='Air date: '
                                                value={new Date(season.air_date).toLocaleDateString()}
                                                isVisible={season.air_date}
                                            />
                                            {season.credits ?
                                                <InfoProperty 
                                                    class='producer'
                                                    name='Producer: '
                                                    value={<ul>{deleteDuplicates(season.credits.crew.filter(person => 
                                                        person.job.includes('Producer')
                                                    )).map(person => 
                                                        <li key={person.id}>
                                                            {person.id ?
                                                                <NavLink to={`/person/${person.id}`}>
                                                                    {person.name}
                                                                </NavLink>
                                                                :
                                                                person.name
                                                            }
                                                        </li>
                                                        )
                                                        }</ul>
                                                    }
                                                        isVisible={season.credits.crew.filter(person =>
                                                            person.job.includes('Producer')
                                                            ).length
                                                    }
                                                /> 
                                                : 
                                                null 
                                            }
                                            {season.overview ? 
                                                <div className='overview'>
                                                        <u>What is the season about?</u><br/>{season.overview}
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                        <img
                                            className='poster'
                                            src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                            alt=''
                                        />
                                    </div>
                                    {season.credits && season.credits.cast.length ?
                                        <Cast cast={season.credits.cast}/>
                                        :
                                        null
                                    }
                                    {season.episodes ?
                                        <section className='episodes'>
                                            <h2>
                                                <img
                                                    src={episodes}
                                                    alt=''
                                                />
                                                Episodes
                                                <select
                                                    ref={ref}                                                        onChange={() => setActiveEpisode(ref.current.value)}
                                                >
                                                    <option value=''>
                                                        -
                                                    </option>
                                                    {season.episodes.map(episode =>
                                                        <option
                                                            key={episode.id}
                                                            value={episode.episode_number}
                                                        >
                                                            {episode.episode_number}
                                                        </option>
                                                    )}
                                                </select>
                                            </h2>
                                            {activeEpisode ?
                                                <div className='episode-info'>
                                                    {season.episodes[activeEpisode - 1].name ?
                                                        <div className='episode-name'>
                                                            "{season.episodes[activeEpisode - 1].name}"
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    <InfoProperty
                                                        class='time'
                                                        name='Time: '
                                                        value={`${season.episodes[activeEpisode - 1].runtime} min.`}
                                                        isVisible={season.episodes[activeEpisode - 1].runtime}
                                                    />
                                                </div>
                                                :
                                                null
                                            }
                                        </section>
                                        :
                                        null
                                    }
                                </>
                                )
                            :
                            null
                        }
                    </div>
                )}
            </div>
        </SeasonsWrapper>
    )
}
