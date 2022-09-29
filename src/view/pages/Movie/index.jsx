// Core
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Component
import { InfoProperty, ActorCard, VideoPlayer, Review, Movies } from '../../components';

// Assets
import actors from '../../../assets/icons/actors.png';
import videos from '../../../assets/icons/videos.png';
import reviews from '../../../assets/icons/reviews.png';
import similar from '../../../assets/icons/similar.png';

// Styles
import { MoviePageWrapper, YTPreviewWrapper } from './styles';

export const MoviePage = () => {
    const [videoPlayerMode, setVideoPlayerMode] = useState({isOn: false, key: null});
    const [reviewPage, setReviewPage] = useState(1);
    const { lang, currentMovie, isFetching, genres } = useSelector(state => state.general);
    const { id } = useParams();
    const clipsRef = useRef();
    const { getCurrentMovie, getCurrentMovieReviewsByPage } = useGeneral();
    useEffect(() => {
        if (!currentMovie || currentMovie.id !== id) {
            getCurrentMovie(id, lang);
        }
    }, [id, lang])

    if (isFetching.main) {
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
                isArrowsVisible={currentMovie.videos.filter(video => video.site === 'YouTube').length * 300 > window.innerWidth}
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
                                    {currentMovie.production_companies.length > 0 ?
                                        <InfoProperty
                                            class='prod_companies'
                                            name='Companies: '
                                            value={currentMovie.production_companies.map((company, index, companies) =>
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
                                   Starring
                                </h2>
                                <div className='cast-list'>
                                    {currentMovie.cast.slice(0, 12).map(actor =>
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
                            <section className='reviews'> 
                                <h2>
                                    <img
                                        src={reviews}
                                        alt=''
                                    />
                                    Reviews
                                </h2>
                                {currentMovie.reviews.data.length > 0 ?
                                    <>
                                        {currentMovie.reviews.totalPages > 1 ?
                                            <div
                                                className='reviewPage-changer'
                                            >
                                                {reviewPage > 1 ?
                                                    <span 
                                                        className='prev-reviewPage'
                                                        onClick={() => setReviewPage(reviewPage - 1)}
                                                    >
                                                        {`< Previous`}
                                                    </span>
                                                    :
                                                    null
                                                }
                                                {currentMovie.reviews.totalPages !== reviewPage ?
                                                    <span
                                                        className='next-reviewPage'
                                                        onClick={() => getCurrentMovieReviewsByPage(id, lang, reviewPage + 1, (arg) => setReviewPage(arg), reviewPage + 1)}
                                                    >
                                                        {`Next >`}
                                                    </span>
                                                    : 
                                                    null
                                                }
                                            </div>
                                            :
                                            null
                                        }
                                        {currentMovie.reviews.data[reviewPage - 1].reviews.length > 0 ?
                                            <dl className='review-list'>
                                                {currentMovie.reviews.data[reviewPage - 1].reviews.map(review =>
                                                    <Review key={review.author} {...review} />
                                                )}
                                            </dl>
                                            : 
                                            null
                                        }
                                    </> 
                                    :
                                    null
                                }
                            </section>
                            <section className='similar'>
                                <h2>
                                    <img 
                                        src={similar}
                                        alt=''
                                    />
                                    Similar
                                </h2>
                                <div className='similar-list'>
                                    {currentMovie.similar.map(movie =>
                                        <Movies
                                            key={movie.id}
                                            {...movie}
                                        />
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
