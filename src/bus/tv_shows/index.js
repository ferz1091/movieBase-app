// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { tvActions } from './slice';

export const useTVShows = () => {
    const dispatch = useDispatch();
    function getTVShows(category, page, lang, totalPages) {
        dispatch(tvActions.getTVShows({category, page, lang, totalPages}))
    }
    return {
        getTVShows
    }
}
