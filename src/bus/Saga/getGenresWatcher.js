// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getGenres(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    })
    try {
        const response = yield effects.call(() => movieAPI.getGenres(action.payload));
        yield effects.put({
            type: generalActions.setGenres.type,
            payload: response.data.genres
        })
    } catch (error) {
        console.log(`Genre loading error:\n${error.message}`);
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    })
}

export function* getGenresWatcher() {
    yield effects.takeLatest(generalActions.getGenres.type, getGenres)
}
