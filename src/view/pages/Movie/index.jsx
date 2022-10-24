// Core
import React, { useEffect } from 'react';

// Component
import { VideoPlayer, MovieInfoHeader, Cast, Clips, Reviews, Similar } from '../../components';

// Tools
import { useMovie } from '../../../tools';

// Styles
import { MoviePageWrapper } from './styles';

export const MoviePage = () => {
    const { reviewPage,
        setReviewPage,
        videoPlayerMode,
        setVideoPlayerMode,
        currentMovie,
        lang,
        isFetching,
        id,
        clipsRef,
        genres,
        getCurrentMovie,
        getCurrentMovieReviewsByPage } = useMovie();
    useEffect(() => {
        if (!currentMovie || currentMovie.id !== id) {
            getCurrentMovie(id, lang, !genres.length);
        }
    }, [id, lang])

    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    }
    else if (currentMovie && !currentMovie.error) {
        return (
            <MoviePageWrapper
                videoPlayerIsOn={videoPlayerMode.isOn}
                videosAmount={!currentMovie.error && currentMovie.videos ? currentMovie.videos.filter(video => video.site === 'YouTube').length : null}
            >
                <MovieInfoHeader currentMovie={currentMovie} />
                <Clips
                    currentMovie={currentMovie}
                    setVideoPlayerMode={setVideoPlayerMode}
                    clipsRef={clipsRef}
                />
                <Cast cast={currentMovie.cast} />
                <Reviews
                    currentMovie={currentMovie}
                    getCurrentMovieReviewsByPage={getCurrentMovieReviewsByPage}
                    reviewPage={reviewPage}
                    setReviewPage={setReviewPage}
                    id={id}
                    lang={lang}
                />
                <Similar currentMovie={currentMovie} />
                {videoPlayerMode.isOn ?
                    <VideoPlayer
                        src_key={videoPlayerMode.key}
                        setVideoPlayerMode={setVideoPlayerMode}
                    />
                    :
                    null
                }
            </MoviePageWrapper>
        )
    } else if (currentMovie && currentMovie.error) {
        return (
            <MoviePageWrapper>
                <div className='error'>
                    {currentMovie.error}
                </div>
            </MoviePageWrapper>
        )
    }
}
