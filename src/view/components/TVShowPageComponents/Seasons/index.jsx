// Core
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import { InfoProperty, Cast, GuestCast, Clips, VideoPlayer } from '../../';

// Tools
import { useMovie, deleteDuplicates } from '../../../../tools';

// Assets
import seasons from '../../../../assets/icons/seasons.png';
import episodes from '../../../../assets/icons/episodes.png';

// Styles
import { SeasonsWrapper, RatingWrapper, SeasonHeadWrapper } from './styles';

export const Seasons = () => {
    const { currentTVShow, lang, getSeason, id, isFetching, videoPlayerMode, setVideoPlayerMode, clipsRef} = useMovie();
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
                        <SeasonHeadWrapper
                            className='head'
                            isHoverActive={season.name && season.poster_path || season.name && season.overview}
                            onClick={() => {
                                if (season.name && season.poster_path || season.name && season.overview) {
                                    if (activeSeason === index) {
                                        setActiveSeason(null);
                                        setActiveEpisode(null);
                                    } else {
                                        setActiveSeason(index);
                                        setActiveEpisode(null);
                                    }
                                }
                            }}
                        >
                            <span className='season-name'>
                                {season.name}
                            </span>
                            {season.name && season.poster_path || season.name && season.overview ?
                                activeSeason === index ?
                                    <span className='arrow-up'>
                                    </span>
                                    :
                                    <span className='arrow-down'>
                                    </span>
                                :
                                null
                            }
                        </SeasonHeadWrapper>
                        {activeSeason === index ?
                            isFetching.seasons ?
                                <div>
                                    SPINNEr
                                </div>
                                :
                                <>
                                    <section className='season-header'>
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
                                                                <Link 
                                                                    target='_blank'
                                                                    to={`/person/${person.id}`}
                                                                >
                                                                    {person.name}
                                                                </Link>
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
                                    </section>
                                    {season.videos && season.videos.length ?
                                        <Clips
                                        currentMovie={season}
                                        setVideoPlayerMode={setVideoPlayerMode}
                                        clipsRef={clipsRef}
                                        /> 
                                        : 
                                        null
                                    }
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
                                                    ref={ref}
                                                    onChange={() => setActiveEpisode(ref.current.value)}
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
                                                    {season.episodes[activeEpisode - 1].name && season.episodes[activeEpisode - 1].vote_average ?
                                                        <div className='episode-header'>
                                                            <span className='episode-name'>
                                                                "{season.episodes[activeEpisode - 1].name}"
                                                            </span>
                                                            <RatingWrapper 
                                                                className='episode-rating'
                                                                vote={season.episodes[activeEpisode - 1].vote_average}
                                                            >
                                                                ★{season.episodes[activeEpisode - 1].vote_average.toFixed(1)}
                                                            </RatingWrapper>
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
                                                    <div className='overview'>
                                                        <u>What is this series about?</u><br />{season.episodes[activeEpisode - 1].overview}
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </section>
                                        :
                                        null
                                    }
                                    {activeEpisode && season.episodes[activeEpisode - 1].guest_stars.length ?
                                            <GuestCast guests={season.episodes[activeEpisode - 1].guest_stars} />
                                        :
                                        null
                                    }
                                </>
                            :
                            null
                        }
                    </div>
                )}
            </div>
            {videoPlayerMode.isOn ?
                <VideoPlayer
                    src_key={videoPlayerMode.key}
                    setVideoPlayerMode={setVideoPlayerMode}
                />
                :
                null
            }
        </SeasonsWrapper>
    )
}
