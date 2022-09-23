// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { moviesActions } from './slice';

export const useMovies = () => {
    const dispatch = useDispatch();
    function getMovies(mode, page, lang, totalPages) {
        dispatch(moviesActions.getMovies({mode, page, lang, totalPages}))
    }
    function setMovies(mode, page, data, error) {
        dispatch(moviesActions.setMovies({mode, page, data, error}))
    }
    return {
        getMovies,
        setMovies
    }
}