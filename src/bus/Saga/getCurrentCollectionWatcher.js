// Core
import * as effects from 'redux-saga/effects';
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentCollection(action) {
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
        const response = yield effects.call(() => movieAPI.getCollection(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentCollection.type,
            payload: response.data
        })
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentCollection.type,
            payload: {error: error.message}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    })
}

export function* getCurrentCollectionWatcher() {
    yield effects.takeLatest(generalActions.getCurrentCollection.type, getCurrentCollection)
}
