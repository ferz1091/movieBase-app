// Core
import axios from 'axios';

// Init
import { API_KEY } from '../init/constants';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.themoviedb.org/3',
});

export const movieAPI = {
    getMovies(mode, page, lang) {
        return (
            instance.get(`/movie/${mode}?api_key=${API_KEY}&language=${lang}&page=${page}`)
        )
    }
}