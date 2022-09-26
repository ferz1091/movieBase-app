// Core
import React from 'react';

// Styles
import { VideoPlayerWrapper } from './styles';

export const VideoPlayer = (video) => {
    return (
        <VideoPlayerWrapper 
            className='videoPlayer-module'
            onClick={() => video.setVideoPlayerMode({isOn: false, key: null})}
        >
            <iframe
                src={`https://www.youtube.com/embed/${video.src_key}?autoplay=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                autoPlay
            >
            </iframe>
        </VideoPlayerWrapper>
    )
}