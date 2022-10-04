// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

// Tools
import { deleteDuplicates } from '../../tools';

function* getGenres(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    })
    try {
        const movieGenres = yield effects.call(() => movieAPI.getMovieGenres(action.payload));
        const tvGenres = yield effects.call(() => movieAPI.getTVGenres(action.payload));

        yield effects.put({
            type: generalActions.setGenres.type,
            payload: movieGenres.data.genres.concat(tvGenres.data.genres)
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
