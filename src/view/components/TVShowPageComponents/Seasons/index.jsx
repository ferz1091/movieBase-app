// Core
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Bus
import { useGeneral } from '../../../../bus/general';

// Components
import { InfoProperty, Cast, GuestCast, Clips, VideoPlayer, SectionHeader, Spinner } from '../../';

// Tools
import { useMovie, deleteDuplicates } from '../../../../tools';

// Assets
import seasons from '../../../../assets/icons/seasons.png';
import episodes from '../../../../assets/icons/episodes.png';

// Styles
import { SeasonsWrapper, RatingWrapper, SeasonHeadWrapper } from './styles';

export const Seasons = () => {
    const { getSeason } = useGeneral();
    const { currentTVShow, 
            lang, 
            id, 
            isFetching, 
            videoPlayerMode, 
            setVideoPlayerMode, 
            clipsRef, 
            styleMode } = useMovie();
    const [activeSeason, setActiveSeason] = useState(null);
    const [activeEpisode, setActiveEpisode] = useState(null);
    const ref = useRef();
    const { t } = useTranslation();
    useEffect(() => {
        if (typeof activeSeason === 'number' && !currentTVShow.seasons[activeSeason].isLoaded) {
            getSeason(id, activeSeason, lang)
        }
    }, [activeSeason])
    return (
        <SeasonsWrapper 
            className='seasons' 
            styleMode={styleMode ? 1 : 0}
        >
            <SectionHeader 
                img={seasons}
                value={t('h2.seasons')}
            />
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
                            styleMode={styleMode ? 1 : 0}
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
                                <Spinner />
                                :
                                <>
                                    <section className='season-header'>
                                        <div className='season-header-top'>
                                        <div>
                                            <InfoProperty
                                                class='air-date'
                                                name={t('tv_show.episode.air')}
                                                value={new Date(season.air_date).toLocaleDateString()}
                                                isVisible={season.air_date}
                                            />
                                            {season.credits ?
                                                <InfoProperty 
                                                    class='producer'
                                                    name={t('tv_show.producer')}
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
                                        </div>
                                        <img
                                            className='poster'
                                            src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                            alt=''
                                        />
                                        </div>
                                        {season.overview ?
                                            <div className='overview'>
                                                <u>{t('tv_show.overview_season')}</u><br />{season.overview}
                                            </div>
                                            :
                                            null
                                        }
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
                                        <Cast 
                                            cast={season.credits.cast}
                                            styleMode={styleMode ? 1 : 0}
                                        />
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
                                                {t('h2.episodes')}
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
                                                    {season.episodes[activeEpisode - 1].name ?
                                                        <div className='episode-header'>
                                                            <span className='episode-name'>
                                                                "{season.episodes[activeEpisode - 1].name}"
                                                            </span>
                                                            {season.episodes[activeEpisode - 1].vote_average ?
                                                                <RatingWrapper
                                                                    className='episode-rating'
                                                                    vote={season.episodes[activeEpisode - 1].vote_average}
                                                                >
                                                                    ★{season.episodes[activeEpisode - 1].vote_average.toFixed(1)}
                                                                </RatingWrapper>
                                                                :
                                                                null
                                                            }
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    <InfoProperty 
                                                        class='air_date'
                                                        name={t('tv_show.episode.air')}
                                                        value={new Date(season.episodes[activeEpisode - 1].air_date).toLocaleDateString()}
                                                        isVisible={season.episodes[activeEpisode - 1].air_date}
                                                    />
                                                    <InfoProperty
                                                        class='time'
                                                        name={t('tv_show.episode.time')}
                                                        value={`${season.episodes[activeEpisode - 1].runtime} min.`}
                                                        isVisible={season.episodes[activeEpisode - 1].runtime}
                                                    />
                                                    {season.episodes[activeEpisode - 1].overview ?
                                                        <div className='overview'>
                                                            <u>{t('tv_show.episode.overview')}</u><br />{season.episodes[activeEpisode - 1].overview}
                                                        </div>
                                                        :
                                                        null
                                                    }
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
