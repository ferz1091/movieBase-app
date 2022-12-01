// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { tvActions } from './slice';

// Thunks
import { getTVShowsThunk } from './thunks';

export const useTVShows = () => {
    const dispatch = useDispatch();
    function getTVShows(category, page, lang, totalPages, isGenresLoaded) {
        dispatch(getTVShowsThunk({ category, page, lang, totalPages, isGenresLoaded }))
    }
    function resetTVShows() {
        dispatch(tvActions.resetTVShows())
    }
    return {
        getTVShows,
        resetTVShows
    }
}
