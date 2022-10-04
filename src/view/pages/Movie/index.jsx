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
            getCurrentMovie,
            getCurrentMovieReviewsByPage } = useMovie();
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
                            <MovieInfoHeader currentMovie={currentMovie}/>
                            <Clips 
                                currentMovie={currentMovie}
                                setVideoPlayerMode={setVideoPlayerMode}
                                clipsRef={clipsRef}
                            />
                            <Cast currentMovie={currentMovie}/>
                            <Reviews 
                                currentMovie={currentMovie}
                                getCurrentMovieReviewsByPage={getCurrentMovieReviewsByPage}
                                reviewPage={reviewPage}
                                setReviewPage={setReviewPage}
                                id={id}
                                lang={lang}
                            />
                            <Similar currentMovie={currentMovie}/>
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
