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
        const response = yield effects.call(() => movieAPI.getMovies(payload.category, payload.page, payload.lang));
        if (!payload.totalPages) {
            yield effects.put({
                type: moviesActions.setTotalPages.type,
                payload: {
                    category: payload.category,
                    totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
                }
            })
        }
        yield effects.put({
            type: moviesActions.setMovies.type, 
            payload: {
                category: payload.category, 
                page: payload.page, 
                data: response.data.results, 
                error: null
            }
        })
    } catch (error) {
        yield effects.put({
            type: moviesActions.setMovies.type,
            payload: {
                category: payload.category,
                page: payload.page,
                data: null,
                error: error.message
            }
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    })
};

export function* getMoviesWatcher() {
    yield effects.takeLatest(moviesActions.getMovies.type, GetMovies);
}
