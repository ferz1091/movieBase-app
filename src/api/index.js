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
    },
    getGenres(lang) {
        return (
            instance.get(`/genre/movie/list?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getCurrentMovie(id, lang) {
        return (
            instance.get(`/movie/${id}?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getMovieCredits(id, lang) {
        return (
            instance.get(`/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getMovieVideos(id, lang) {
        return (
            instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getMovieReviews(id, lang, page) {
        return (
            instance.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=${lang}&page=${page}`)
        )
    },
    getSimilarMovies(id, lang) {
        return (
            instance.get(`/movie/${id}/similar?api_key=${API_KEY}&language=${lang}&page=1`)
        )
    },
    getSocialIds(id) {
        return (
            instance.get(`/movie/${id}/external_ids?api_key=${API_KEY}`)
        )
    }
}