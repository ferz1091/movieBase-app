// Core
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../bus/general';

export const useMovie = () => {
    const [reviewPage, setReviewPage] = useState(1);
    const [videoPlayerMode, setVideoPlayerMode] = useState({ isOn: false, key: null });
    const { lang, currentMovie, isFetching } = useSelector(state => state.general);
    const { getCurrentMovie, getCurrentMovieReviewsByPage } = useGeneral();
    const clipsRef = useRef();
    const { id } = useParams();
    return {
        reviewPage,
        setReviewPage,
        videoPlayerMode,
        setVideoPlayerMode,
        lang,
        currentMovie,
        isFetching,
        id,
        clipsRef,
        getCurrentMovie,
        getCurrentMovieReviewsByPage
    }
}
