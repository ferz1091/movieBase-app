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
                videosAmount={currentMovie.videos && !currentMovie.videos.error ? currentMovie.videos.filter(video => video.site === 'YouTube').length : null}
            >
                <MovieInfoHeader currentMovie={currentMovie} />
                {!currentMovie.videos.error && currentMovie.videos.length ?
                    <Clips
                    currentMovie={currentMovie}
                    setVideoPlayerMode={setVideoPlayerMode}
                    clipsRef={clipsRef}
                    />
                    :
                    null
                }
                {!currentMovie.cast.error ? 
                    <Cast cast={currentMovie.cast} /> 
                    : 
                    null
                }
                {!currentMovie.reviews.error && currentMovie.reviews.totalPages ?
                    <Reviews
                        currentMovie={currentMovie}
                        getCurrentMovieReviewsByPage={getCurrentMovieReviewsByPage}
                        reviewPage={reviewPage}
                        setReviewPage={setReviewPage}
                        id={id}
                        lang={lang}
                    />
                    :
                    null
                }
                {!currentMovie.similar.error ?
                    <Similar currentMovie={currentMovie} />
                    :
                    null
                }
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
