// Core
import axios from 'axios';

// Init
import { API_KEY } from '../init/constants';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.themoviedb.org/3',
});

export const movieAPI = {
    getMovies(category, page, lang) {
        return (
            instance.get(`/movie/${category}?api_key=${API_KEY}&language=${lang}&page=${page}`)
        )
    },
    getTVShows(category, page, lang) {
        return (
            instance.get(`/tv/${category}?api_key=${API_KEY}&language=${lang}&page=${page}`)
        )
    },
    getMovieGenres(lang) {
        return (
            instance.get(`/genre/movie/list?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getTVGenres(lang) {
        return (
            instance.get(`/genre/tv/list?api_key=${API_KEY}&language=${lang}`)
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
    getMovieSocialIds(id) {
        return (
            instance.get(`/movie/${id}/external_ids?api_key=${API_KEY}`)
        )
    },
    getCollection(id, lang) {
        return (
            instance.get(`/collecstion/${id}?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getCurrentPerson(id, lang) {
        return (
            instance.get(`/person/${id}?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getPersonMovieCredits(id, lang) {
        return (
            instance.get(`/person/${id}/movie_credits?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getPersonTVCredits(id, lang) {
        return (
            instance.get(`/person/${id}/tv_credits?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getPersonSocialIds(id, lang) {
        return (
            instance.get(`/person/${id}/external_ids?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getCurrentTVShow(id, lang) {
        return (
            instance.get(`/tv/${id}?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getTVShowSocialIds(id, lang) {
        return (
            instance.get(`/tv/${id}/external_ids?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getTVShowReviews(id, lang, page) {
        return (
            instance.get(`/tv/${id}/reviews?api_key=${API_KEY}&language=${lang}&page=${page}`)
        )
    },
    getSeason(id, season, lang) {
        return (
            instance.get(`/tv/${id}/season/${season}?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getSeasonCredits(id, season, lang) {
        return (
            instance.get(`/tv/${id}/season/${season}/credits?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getSeasonVideos(id, season, lang) {
        return (
            instance.get(`/tv/${id}/season/${season}/videos?api_key=${API_KEY}&language=${lang}`)
        )
    },
    getSimilarTVShows(id, lang) {
        return (
            instance.get(`/tv/${id}/similar?api_key=${API_KEY}&language=${lang}&page=1`)
        )
    }
}
