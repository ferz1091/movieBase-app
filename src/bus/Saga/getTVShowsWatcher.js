// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { tvActions } from '../tv_shows/slice';
import { generalActions } from '../general/slice';

function* GetTVShows (action) {
    const payload = action.payload;
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    });
    try {
        const response = yield effects.call(() => movieAPI.getTVShows(payload.category, payload.page, payload.lang));
        if (!payload.totalPages) {
            yield effects.put({
                type: tvActions.setTotalPages.type,
                payload: {
                    category: payload.category,
                    totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
                }
            })
        }
        yield effects.put({
            type: tvActions.setTVShows.type,
            payload: {
                category: payload.category,
                page: payload.page,
                data: response.data.results,
                error: null
            }
        })
    } catch (error) {
        yield effects.put({
            type: tvActions.setTVShows.type,
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
    });
}

export function* getTVShowsWatcher() {
    yield effects.takeLatest(tvActions.getTVShows.type, GetTVShows)
}
