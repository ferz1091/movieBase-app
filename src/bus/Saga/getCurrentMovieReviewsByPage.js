// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentMovieReviewsByPage(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingReviews.type,
        payload: true
    })
    try {
        const movieReviews = yield effects.call(() => movieAPI.getMovieReviews(action.payload.id, action.payload.lang, action.payload.page));
        yield effects.put({
            type: generalActions.setCurrentMovieReviews.type,
            payload: { totalPages: movieReviews.data.total_pages, reviews: movieReviews.data.results, page: movieReviews.data.page }
        })
        yield effects.call(() => action.payload.func(action.payload.arg));
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentMovieReviews.type,
            payload: { error: error.message, page: action.payload.page }
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingReviews.type,
        payload: false
    })
}

export function* getCurrentMovieReviewsByPageWatcher() {
    yield effects.takeLatest(generalActions.getCurrentMovieReviewsByPage.type, getCurrentMovieReviewsByPage)
}
