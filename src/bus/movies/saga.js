// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { moviesActions } from './slice';
import { generalActions } from '../general/slice';


function* GetMovies(action) {
    const payload = action.payload;
    yield effects.put({
        type: generalActions.toggleIsFetching.type,
        payload: true
    });
    try {
        const response = yield effects.call(() => movieAPI.getMovies(payload.mode, payload.page, payload.lang));
        yield effects.put({
            type: moviesActions.setMovies.type, 
            payload: {
                mode: payload.mode, 
                page: payload.page, 
                data: response.data.results, 
                error: null
                }
            })
        yield effects.put({
            type: generalActions.toggleIsFetching.type,
            payload: false
        })
    } catch (error) {
        yield effects.put({
            type: moviesActions.setMovies.type,
            payload: {
                mode: payload.mode,
                page: payload.page,
                data: null,
                error: error.message
            }
        })
        yield effects.put({
            type: generalActions.toggleIsFetching.type,
            payload: false
        })
    }
};

export function* watchFetchMovies() {
    yield effects.takeLatest(moviesActions.getMovies.type, GetMovies);
}