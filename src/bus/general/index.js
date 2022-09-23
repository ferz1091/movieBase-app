// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function toggleIsFetching(isFetching) {
        dispatch(generalActions.toggleIsFetching(isFetching))
    }
    function switchMode(mode) {
        dispatch(generalActions.switchMode(mode))
    }
    function getGenres(lang) {
        dispatch(generalActions.getGenres(lang))
    }
    function getCurrentMovie(id, lang) {
        dispatch(generalActions.getCurrentMovie({id, lang}))
    }

    return {
        toggleIsFetching,
        switchMode,
        getGenres,
        getCurrentMovie
    }
}