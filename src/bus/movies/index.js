// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { moviesActions } from './slice';

export const useMovies = () => {
    const dispatch = useDispatch();
    function getMovies(category, page, lang, totalPages) {
        dispatch(moviesActions.getMovies({category, page, lang, totalPages}))
    }
    return {
        getMovies
    }
}
