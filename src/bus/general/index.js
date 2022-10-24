// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function getGenres(lang) {
        dispatch(generalActions.getGenres(lang))
    }
    function getCurrentMovie(id, lang, isGenresLoaded) {
        dispatch(generalActions.getCurrentMovie({id, lang, isGenresLoaded}))
    }
    function getCurrentMovieReviewsByPage(id, lang, page, func, arg) {
        dispatch(generalActions.getCurrentMovieReviewsByPage({id, lang, page, func, arg}))
    }
    function getCurrentPerson(id, lang, isGenresLoaded) {
        dispatch(generalActions.getCurrentPerson({ id, lang, isGenresLoaded }))
    }
    function getCurrentTVShow(id, lang, isGenresLoaded) {
        dispatch(generalActions.getCurrentTVShow({ id, lang, isGenresLoaded}))
    }
    function getSeason(id, season, lang) {
        dispatch(generalActions.getSeason({id, season, lang}))
    }
    function createSeasonsInfo(length) {
        dispatch(generalActions.createSeasonsInfo(length))
    }
    function getCurrentTVShowReviewsByPage(id, lang, page, func, arg) {
        dispatch(generalActions.getCurrentTVShowReviewsByPage({id, lang, page, func, arg}))
    }
    function switchMode(mode) {
        dispatch(generalActions.switchMode(mode))
    }
    return {
        switchMode,
        getGenres,
        getCurrentMovie,
        getCurrentMovieReviewsByPage,
        getCurrentPerson,
        getCurrentTVShow,
        createSeasonsInfo,
        getSeason,
        getCurrentTVShowReviewsByPage
    }
}
