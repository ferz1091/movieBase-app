// Core
import React, { useEffect, useState } from 'react';

// Components
import { InfoProperty } from '../../common';

// Tools
import { useMovie } from '../../../../tools';

// Assets
import seasons from '../../../../assets/icons/seasons.png';

// Styles
import { SeasonsWrapper } from './styles';

export const Seasons = () => {
    const { currentTVShow, lang, getSeason, id, isFetching } = useMovie();
    const [activeSeason, setActiveSeason] = useState(null);
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
                                } else {
                                    setActiveSeason(index);
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
                                <div className='season-header'>
                                    <div>
                                        <InfoProperty
                                            class='air-date'
                                            name='Air date: '
                                            value={new Date(season.air_date).toLocaleDateString()}
                                            isVisible={season.air_date}
                                        />
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
