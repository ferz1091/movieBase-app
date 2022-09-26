// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentMovie(action) {
    yield effects.put({
        type: generalActions.toggleIsFetching.type,
        payload: true
    })
    try {
        const response = yield effects.call(() => movieAPI.getCurrentMovie(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentMovie.type,
            payload: response.data
        });
        const movieCredits = yield effects.call(() => movieAPI.getMovieCredits(action.payload.id, action.payload.lang));
        console.log(movieCredits.data);
        yield effects.put({
            type: generalActions.setCurrentMovieCredits.type,
            payload: movieCredits.data
        });
        const movieVideos = yield effects.call(() => movieAPI.getMovieVideos(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentMovieVideos.type,
            payload: movieVideos.data.results
        })
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentMovie.type,
            payload: {error: error.message}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetching.type,
        payload: false
    })
}

export function* getCurrentMovieWatcher() {
    yield effects.takeLatest(generalActions.getCurrentMovie.type, getCurrentMovie)
}
