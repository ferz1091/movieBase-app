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
        getCurrentTVShowReviewsByPageThunk,
        getCurrentSearchResultsByStringThunk,
        getMoviesByParamsThunk,
        getTVShowsByParamsThunk } from './thunks';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function getCurrentMovie(id, lang, isGenresLoaded) {
        dispatch(getCurrentMovieThunk({ id, lang, isGenresLoaded }))
    }
    function getCurrentMovieReviewsByPage(id, lang, page, func, arg) {
        dispatch(getCurrentMovieReviewsByPageThunk({id, lang, page, func, arg}))
    }
    function getCurrentPerson(id, lang, isGenresLoaded) {
        dispatch(getCurrentPersonThunk({ id, lang, isGenresLoaded }))
    }
    function getCurrentTVShow(id, lang, isGenresLoaded) {
        dispatch(getCurrentTVShowThunk({ id, lang, isGenresLoaded }))
    }
    function getSeason(id, season, lang) {
        dispatch(getCurrentTVShowSeasonThunk({id, season, lang}))
    }
    function getCurrentTVShowReviewsByPage(id, lang, page, func, arg) {
        dispatch(getCurrentTVShowReviewsByPageThunk({id, lang, page, func, arg}))
    }
    function getCurrentCollection(id, lang, isGenresLoaded) {
        dispatch(getCurrentCollectionThunk({ id, lang, isGenresLoaded }))
    }
    function getCurrentSearchResultByString(query, page, lang) {
        dispatch(getCurrentSearchResultsByStringThunk({query, page, lang}))
    }
    function getMoviesByParams(genre, year, page, lang, isGenresLoaded) {
        dispatch(getMoviesByParamsThunk({genre, year, page, lang, isGenresLoaded}))
    }
    function getTVShowsByParams(genre, year, page, lang, isGenresLoaded) {
        dispatch(getTVShowsByParamsThunk({genre, year, page, lang, isGenresLoaded}))
    }
    function createSeasonsInfo(length) {
        dispatch(generalActions.createSeasonsInfo(length))
    }
    function switchMode(mode) {
        dispatch(generalActions.switchMode(mode))
    }
    function resetSearchResults() {
        dispatch(generalActions.resetSearchResults())
    }
    function resetCompositionsByParams() {
        dispatch(generalActions.resetCompositionsByParams())
    }
    function setCategory(category) {
        dispatch(generalActions.setCategory(category))
    }
    function toggleStyle(styleMode) {
        dispatch(generalActions.toggleStyle(styleMode))
    }
    function toggleLanguage(lang) {
        dispatch(generalActions.toggleLanguage(lang))
    }
    function resetGenres() {
        dispatch(generalActions.resetGenres())
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
        getCurrentCollection,
        getCurrentSearchResultByString,
        resetSearchResults,
        getMoviesByParams,
        resetCompositionsByParams,
        getTVShowsByParams,
        setCategory,
        toggleStyle,
        toggleLanguage,
        resetGenres
    }
}
