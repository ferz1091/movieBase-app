// Api
import { movieAPI } from '../api';

export async function getGenres(lang) {
    const movieGenres = await movieAPI.getMovieGenres(lang);
    const tvGenres = await movieAPI.getTVGenres(lang);
    return movieGenres.data.genres.map(genre => Object.assign(genre, {mode: false})).concat(tvGenres.data.genres.map(genre => Object.assign(genre, {mode: true})));
}
