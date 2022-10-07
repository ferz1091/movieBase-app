// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentTVShowReviewsByPage(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingReviews.type,
        payload: true
    })
    try {
        const TVShowReviews = yield effects.call(() => movieAPI.getTVShowReviews(action.payload.id, action.payload.lang, action.payload.page));
        yield effects.put({
            type: generalActions.setCurrentTVShowReviews.type,
            payload: { totalPages: TVShowReviews.data.total_pages, reviews: TVShowReviews.data.results, page: TVShowReviews.data.page }
        })
        yield effects.call(() => action.payload.func(action.payload.arg));
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentTVShowReviews.type,
            payload: { error: error.message, page: action.payload.page }
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingReviews.type,
        payload: false
    })
}

export function* getCurrentTVShowReviewsByPageWatcher() {
    yield effects.takeLatest(generalActions.getCurrentTVShowReviewsByPage.type, getCurrentTVShowReviewsByPage)
}
