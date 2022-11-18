// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { moviesActions } from './slice';

// Thunks
import { getMoviesThunk } from './thunks';

export const useMovies = () => {
    const dispatch = useDispatch();
    function getMovies(category, page, lang, totalPages, isGenresLoaded) {
        dispatch(getMoviesThunk({ category, page, lang, totalPages, isGenresLoaded }))
    }
    function resetMovies() {
        dispatch(moviesActions.resetMovies())
    }
    return {
        getMovies,
        resetMovies
    }
}
