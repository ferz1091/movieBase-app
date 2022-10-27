// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { generalActions } from './slice';

// Thunks
import { getCurrentCollectionThunk, 
        getCurrentMovieThunk, 
        getCurrentPersonThunk, 
        getCurrentMovieReviewsByPageThunk,
        getCurrentTVShowThunk,
        getCurrentTVShowSeasonThunk,
        getCurrentTVShowReviewsByPageThunk } from './thunks';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function getCurrentMovie(id, lang, isGenresLoaded) {
        dispatch(getCurrentMovieThunk({id, lang, isGenresLoaded}))
    }
    function getCurrentMovieReviewsByPage(id, lang, page, func, arg) {
        dispatch(getCurrentMovieReviewsByPageThunk({id, lang, page, func, arg}))
    }
    function getCurrentPerson(id, lang, isGenresLoaded) {
        dispatch(getCurrentPersonThunk({ id, lang, isGenresLoaded }))
    }
    function getCurrentTVShow(id, lang, isGenresLoaded) {
        dispatch(getCurrentTVShowThunk({ id, lang, isGenresLoaded}))
    }
    function getSeason(id, season, lang) {
        dispatch(getCurrentTVShowSeasonThunk({id, season, lang}))
    }
    function getCurrentTVShowReviewsByPage(id, lang, page, func, arg) {
        dispatch(getCurrentTVShowReviewsByPageThunk({id, lang, page, func, arg}))
    }
    function getCurrentCollection(id, lang, isGenresLoaded) {
        dispatch(getCurrentCollectionThunk({id, lang, isGenresLoaded}))
    }
    function createSeasonsInfo(length) {
        dispatch(generalActions.createSeasonsInfo(length))
    }
    function switchMode(mode) {
        dispatch(generalActions.switchMode(mode))
    }
    return {
        switchMode,
        getCurrentMovie,
        getCurrentMovieReviewsByPage,
        getCurrentPerson,
        getCurrentTVShow,
        createSeasonsInfo,
        getSeason,
        getCurrentTVShowReviewsByPage,
        getCurrentCollection
    }
}
