// Core
import React from 'react';

// Components
import { SectionHeader } from '../../';

// Assets
import clips from '../../../../assets/icons/clips.png';

// Styles
import { ClipsWrapper, YTPreviewWrapper } from './styles';

export const Clips = (props) => {
    return (
        <ClipsWrapper 
            className='clips'
            videosAmount={props.currentMovie.videos.filter(video => video.site === 'YouTube').length}
            isArrowsVisible={props.currentMovie.videos.filter(video => video.site === 'YouTube').length * 300 > window.innerWidth}
        >
            <SectionHeader 
                img={clips}
                value='Clips'
                alt='Clips'
            />
            <div
                className='clips-container'
                ref={props.clipsRef}
            >
                <span
                    className='right arrow'
                    onClick={() => props.clipsRef.current.scrollBy(200, 0)}
                >
                </span>
                <span
                    className='left arrow'
                    onClick={() => props.clipsRef.current.scrollBy(-200, 0)}
                >
                </span>
                {props.currentMovie.videos.filter(video => video.site === "YouTube").map(video =>
                    <YTPreviewWrapper
                        key={video.key}
                        logo={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                        onClick={() => props.setVideoPlayerMode({ isOn: true, key: video.key })}
                    >
                        <span className='play'>
                        </span>
                        <span className='video-name'>
                            {video.name}
                        </span>
                    </YTPreviewWrapper>
                )}
            </div>
        </ClipsWrapper>
    )
}
