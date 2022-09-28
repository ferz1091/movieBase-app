// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function switchMode(mode) {
        dispatch(generalActions.switchMode(mode))
    }
    function getGenres(lang) {
        dispatch(generalActions.getGenres(lang))
    }
    function getCurrentMovie(id, lang) {
        dispatch(generalActions.getCurrentMovie({id, lang}))
    }
    function getCurrentMovieReviewsByPage(id, lang, page, func, arg) {
        dispatch(generalActions.getCurrentMovieReviewsByPage({id, lang, page, func, arg}))
    }

    return {
        switchMode,
        getGenres,
        getCurrentMovie,
        getCurrentMovieReviewsByPage
    }
}