// Core
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useMovies } from '../bus/movies';
import { useTVShows } from '../bus/tv_shows';

export const useMain = () => {
    const { category, page } = useParams();
    const { lang, isFetching, genres, mode } = useSelector(state => state.general);
    const movies = useSelector(state => state.movies);
    const tv_shows = useSelector(state => state.tv);
    const { getMovies } = useMovies();
    const { getTVShows } = useTVShows();
    return {
        category,
        page,
        lang,
        isFetching,
        genres,
        mode,
        movies,
        tv_shows,
        getMovies,
        getTVShows
    }
}
