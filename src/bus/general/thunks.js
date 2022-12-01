// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Action
import { generalActions } from './slice';

// Api
import { movieAPI } from '../../api';

// Tools
import { getGenres, deleteDuplicates, getLanguages } from '../../tools';

// CURRENT MOVIE
export const getCurrentMovieThunk = createAsyncThunk('general/getCurrentMovie', async ({id, lang, isGenresLoaded}, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    let currentMovie = {};
    try {
        const movie = await movieAPI.getCurrentMovie(id, lang);
        currentMovie = movie.data;
    } catch (error) {
        return {error: error.message};
    }
    try {
        const credits = await movieAPI.getMovieCredits(id, lang);
        currentMovie = {...currentMovie, ...credits.data};
    } catch (error) {
        currentMovie = {...currentMovie, crew: {error: error.message}, cast: {error: error.message}}
    }
    try {
        const videos = await movieAPI.getMovieVideos(id, lang);
        currentMovie = {...currentMovie, videos: [...videos.data.results]};
    } catch (error) {
        currentMovie = {...currentMovie, videos: {error: error.message}};
    }
    try {
        const reviews = await movieAPI.getMovieReviews(id, lang, 1);
        currentMovie = {...currentMovie, reviews: {totalPages: reviews.data.total_pages, data: [{ page: 1, reviews: [...reviews.data.results]}]}};
    } catch (error) {
        currentMovie = {...currentMovie, reviews: {error: error.message}}
    }
    try {
        const similar = await movieAPI.getSimilarMovies(id, lang);
        currentMovie = {...currentMovie, similar: similar.data.results};
    } catch (error) {
        currentMovie = {...currentMovie, similar: {error: error.message}}
    }
    try {
        const socialIds = await movieAPI.getMovieSocialIds(id);
        currentMovie = {...currentMovie, social: socialIds.data} 
    } catch (error) {
        currentMovie = {...currentMovie, social: {error: error.message}}
    }
    return currentMovie;
})

// CURRENT TV SHOW
export const getCurrentTVShowThunk = createAsyncThunk('general/getCurrentTVShow', async ({ id, lang, isGenresLoaded }, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    let currentTVShow = {};
    try {
        const tvShow = await movieAPI.getCurrentTVShow(id, lang);
        currentTVShow = tvShow.data;
    } catch (error) {
        return { error: error.message }
    }
    try {
        const reviews = await movieAPI.getTVShowReviews(id, lang, 1);
        currentTVShow = { ...currentTVShow, reviews: { totalPages: reviews.data.total_pages, data: [{ page: 1, reviews: [...reviews.data.results] }] } };
    } catch (error) {
        currentTVShow = { ...currentTVShow, reviews: { error: error.message } }
    }
    try {
        const socialIds = await movieAPI.getTVShowSocialIds(id, lang);
        currentTVShow = {...currentTVShow, social: socialIds.data}
    } catch (error) {
        currentTVShow = {...currentTVShow, social: { error: error.message }}
    }
    try {
        const similar = await movieAPI.getSimilarTVShows(id, lang);
        currentTVShow = {...currentTVShow, similar: similar.data.results}
    } catch (error) {
        currentTVShow = {...currentTVShow, similar: { error: error.message }}
    }
    return currentTVShow;
})

// CURRENT TV SHOW SEASON
export const getCurrentTVShowSeasonThunk = createAsyncThunk('general/getCurrentTVShowSeason', async ({id, season, lang}) => {
    let currentSeason = {};
    try {
        const seasonData = await movieAPI.getSeason(id, season, lang);
        currentSeason = seasonData.data;
    } catch (error) {
        currentSeason = {season_number: season}
        console.log(`Season data failed: ${error.message}`)
    }
    try {
        const credits = await movieAPI.getSeasonCredits(id, season, lang);
        currentSeason = {...currentSeason, credits: credits.data}
    } catch (error) {
        console.log(`Season credits failed: ${error.message}`)
    }
    try {
        const videos = await movieAPI.getSeasonVideos(id, season, lang);
        currentSeason = {...currentSeason, videos: videos.data.results}
    } catch (error) {
        console.log(`Season videos failed: ${error.message}`)
    }
    return currentSeason;
})

// CURRENT PERSON
export const getCurrentPersonThunk = createAsyncThunk('general/getCurrentPerson', async ({ id, lang, isGenresLoaded }, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    let currentPerson = {};
    let isActor;
    try {
        const person = await movieAPI.getCurrentPerson(id, lang);
        person.data.known_for_departament === 'Acting' ? isActor = true : isActor = false;
        currentPerson = {...person.data}
    } catch (error) {
        return {error: error.message}
    }
    try {
        const movieCredits = await movieAPI.getPersonMovieCredits(id, lang);
        currentPerson = {
                            ...currentPerson, 
                            credits: {movie: isActor ? deleteDuplicates(movieCredits.data.cast.concat(movieCredits.data.crew)) : deleteDuplicates(movieCredits.data.crew.concat(movieCredits.data.cast))}
                        }
    } catch (error) {
        currentPerson = {...currentPerson, credits: {movie: {error: error.message}}}
    }
    try {
        const tvCredits = await movieAPI.getPersonTVCredits(id, lang);
        currentPerson = {
                            ...currentPerson,
                            credits: {...currentPerson.credits, tv: isActor ? deleteDuplicates(tvCredits.data.cast.concat(tvCredits.data.crew)) : deleteDuplicates(tvCredits.data.crew.concat(tvCredits.data.cast))}
                        }
    } catch (error) {
        currentPerson = {...currentPerson, credits: {...currentPerson.credits, tv: {error: error.message}}}
    }
    try {
        const socialIds = await movieAPI.getPersonSocialIds(id, lang);
        currentPerson = {...currentPerson, social: socialIds.data}
    } catch (error) {
        currentPerson = {...currentPerson, social: {error: error.message}}
    }
    return currentPerson;
})

// CURRENT MOVIE REVIEWS BY PAGE
export const getCurrentMovieReviewsByPageThunk = createAsyncThunk('general/getCurrentMovieReviewsByPage', async ({id, lang, page, func, arg}) => {
    const response = await movieAPI.getMovieReviews(id, lang, page);
    return {page, func, arg, data: response.data.results};
});

// CURRENT TV SHOW REVIEWS BY PAGE
export const getCurrentTVShowReviewsByPageThunk = createAsyncThunk('general/getCurrentTVShowReviewsByPage', async ({id, lang, page, func, arg}) => {
    const response = await movieAPI.getTVShowReviews(id, lang, page);
    return {page, func, arg, data: response.data.results}
})

// CURRENT COLLECTION
export const getCurrentCollectionThunk = createAsyncThunk('general/getCurrentCollection', async ({ id, lang, isGenresLoaded }, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({error: error.message})))
    }
    const response = await movieAPI.getCollection(id, lang);
    return response.data;
})

// SEARCH CURRENT STRING
export const getCurrentSearchResultsByStringThunk = createAsyncThunk('general/getCurrentSearchResultByString', async ({query, page, lang}) => {
    const movies = await movieAPI.getMoviesByString(query, page, lang);
    const tv_shows = await movieAPI.getTVShowsByString(query, page, lang);
    return movies.data.results.concat(tv_shows.data.results).sort((a, b) => b.popularity - a.popularity);
})

// MOVIES BY PARAMS 
export const getMoviesByParamsThunk = createAsyncThunk('general/getMoviesByParams', async ({genre, year, page, lang, isGenresLoaded}, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    const response = await movieAPI.getMoviesByParams(genre, year, page, lang);
    return response.data;
})

// TV SHOWS BY PARAMS
export const getTVShowsByParamsThunk = createAsyncThunk('general/getTVShowsByParams', async ({genre, year, page, lang, isGenresLoaded}, {dispatch}) => {
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    const response = await movieAPI.getTVShowsByParams(genre, year, page, lang);
    return response.data;
})
