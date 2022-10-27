// Api
import { movieAPI } from '../api';

export async function getGenres(lang) {
    const movieGenres = await movieAPI.getMovieGenres(lang);
    const tvGenres = await movieAPI.getTVGenres(lang);
    return movieGenres.data.genres.concat(tvGenres.data.genres);
}
