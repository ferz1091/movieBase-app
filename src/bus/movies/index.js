// Core
import { useDispatch } from 'react-redux/es/exports';

// Thunks
import { getMoviesThunk } from './thunks';

export const useMovies = () => {
    const dispatch = useDispatch();
    function getMovies(category, page, lang, totalPages, isGenresLoaded) {
        dispatch(getMoviesThunk({category, page, lang, totalPages, isGenresLoaded}))
    }
    return {
        getMovies
    }
}
