// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentMovie(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    })
    try {
        if (action.payload.isGenresLoaded) {
            const movieGenres = yield effects.call(() => movieAPI.getMovieGenres(action.payload.lang));
            const tvGenres = yield effects.call(() => movieAPI.getTVGenres(action.payload.lang));
            yield effects.put({
                type: generalActions.setGenres.type, 
                payload: movieGenres.data.genres.concat(tvGenres.data.genres)
            })
        }
        const response = yield effects.call(() => movieAPI.getCurrentMovie(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentMovie.type,
            payload: response.data
        });
        const movieCredits = yield effects.call(() => movieAPI.getMovieCredits(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentMovieCredits.type,
            payload: movieCredits.data
        });
        const movieVideos = yield effects.call(() => movieAPI.getMovieVideos(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentMovieVideos.type,
            payload: movieVideos.data.results
        })
        const movieReviews = yield effects.call(() => movieAPI.getMovieReviews(action.payload.id, action.payload.lang, 1));
        yield effects.put({
            type: generalActions.setCurrentMovieReviews.type,
            payload: { totalPages: movieReviews.data.total_pages, reviews: movieReviews.data.results, page: 1 }
        })
        const similarMovies = yield effects.call(() => movieAPI.getSimilarMovies(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setSimilarMovies.type,
            payload: similarMovies.data.results
        })
        const socialIds = yield effects.call(() => movieAPI.getMovieSocialIds(action.payload.id));
        yield effects.put({
            type: generalActions.setMovieSocialIds.type,
            payload: socialIds.data
        })
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentMovie.type,
            payload: {error: error.message}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    })
}

export function* getCurrentMovieWatcher() {
    yield effects.takeLatest(generalActions.getCurrentMovie.type, getCurrentMovie)
}
