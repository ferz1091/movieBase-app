// Core
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Component
import { InfoProperty, ActorCard, VideoPlayer } from '../../components';

// Assets
import actors from '../../../assets/icons/actors.png';
import videos from '../../../assets/icons/videos.png';

// Styles
import { MoviePageWrapper, YTPreviewWrapper } from './styles';

export const MoviePage = () => {
    const [videoPlayerMode, setVideoPlayerMode] = useState({isOn: false, key: null});
    const { lang, currentMovie, isFetching, genres } = useSelector(state => state.general);
    const { id } = useParams();
    const clipsRef = useRef();
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
                videoPlayerIsOn={videoPlayerMode.isOn}
                videosAmount={currentMovie.videos.filter(video => video.site === 'YouTube').length}
            >
                {currentMovie ?
                    currentMovie.error ?
                        <div>
                            {currentMovie.error}
                        </div>
                        :
                        <>
                            <section className='info-header'>
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
                                            class='production-country'
                                            name='Country: '
                                            value={currentMovie.production_countries.map((country, index, countries) =>
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
                                            class='language'
                                            name='Language: '
                                            value={currentMovie.spoken_languages.map((language, index, languages) =>
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
                                            class='director'
                                            name='Director: '
                                            value={currentMovie.crew.find(member => member.job === 'Director').original_name}
                                        />
                                        :
                                        null
                                    }
                                    <InfoProperty
                                        class='time'
                                        name='Time: '
                                        value={`${currentMovie.runtime} min.`}
                                    />
                                    {currentMovie.overview ?
                                        <div className='overview'>
                                            <u>What is the movie about?</u><br />{currentMovie.overview}
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </section>
                            <section className='cast'>
                                <h2>
                                    <img 
                                        src={actors}
                                        alt=''
                                    />
                                   Cast
                                </h2>
                                <div className='cast-list'>
                                    {currentMovie.cast.slice(0, 18).map(actor =>
                                        <ActorCard key={actor.id} {...actor} />
                                    )}
                                </div>
                            </section>
                            <section className='videos'> 
                                <h2>
                                    <img 
                                        src={videos}
                                        alt=''
                                    />
                                    Clips
                                </h2>
                                <div 
                                    className='videos-container'
                                    ref={clipsRef}                               
                                >
                                    <span 
                                        className='right arrow' 
                                        onClick={() => clipsRef.current.scrollBy(200, 0)}
                                    >
                                    </span>
                                    <span 
                                        className='left arrow' 
                                        onClick={() => clipsRef.current.scrollBy(-200, 0)}
                                    >
                                    </span>
                                    {currentMovie.videos.filter(video => video.site === "YouTube").map(video => 
                                    <YTPreviewWrapper
                                        key={video.key}
                                        logo={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                                        onClick={() => setVideoPlayerMode({isOn: true, key: video.key})}
                                    >
                                        <span className='play'>
                                        </span>
                                        <span className='video-name'>
                                            {video.name}
                                        </span>
                                    </YTPreviewWrapper>
                                    )}
                                </div>
                            </section>
                            {videoPlayerMode.isOn ? 
                                <VideoPlayer 
                                    src_key={videoPlayerMode.key}
                                    setVideoPlayerMode={setVideoPlayerMode}
                                />
                                :
                                null
                            }
                        </>
                    :
                    null
                }
            </MoviePageWrapper>
        )
    }
}
