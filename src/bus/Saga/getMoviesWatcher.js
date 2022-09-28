// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { moviesActions } from '../movies/slice';
import { generalActions } from '../general/slice';

function* GetMovies(action) {
    const payload = action.payload;
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    });
    try {
        const response = yield effects.call(() => movieAPI.getMovies(payload.mode, payload.page, payload.lang));
        if (!payload.totalPages) {
            yield effects.put({
                type: moviesActions.setTotalPages.type,
                payload: {
                    mode: payload.mode,
                    totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
                }
            })
        }
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
            type: generalActions.toggleIsFetchingMain.type,
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
            type: generalActions.toggleIsFetchingMain.type,
            payload: false
        })
    }
};

export function* watchFetchMovies() {
    yield effects.takeLatest(moviesActions.getMovies.type, GetMovies);
}
