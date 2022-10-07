// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getCurrentTVShow(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    })
    try {
        const currentTVShow = yield effects.call(() => movieAPI.getCurrentTVShow(action.payload.id, action.payload.lang))
        yield effects.put({
            type: generalActions.setCurrentTVShow.type,
            payload: currentTVShow.data
        })
        const socialIds = yield effects.call(() => movieAPI.getTVShowSocialIds(action.payload.id, action.payload.lang))
        yield effects.put({
            type: generalActions.setCurrentTVShowSocialIds.type,
            payload: socialIds.data
        })
        const TVShowReviews = yield effects.call(() => movieAPI.getTVShowReviews(action.payload.id, action.payload.lang, 1))
        yield effects.put({
            type: generalActions.setCurrentTVShowReviews.type,
            payload: { totalPages: TVShowReviews.data.total_pages, reviews: TVShowReviews.data.results, page: 1 }
        })
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentTVShow.type,
            payload: {error: error.message}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    })
}

export function* getCurrentTVShowWatcher() {
    yield effects.takeLatest(generalActions.getCurrentTVShow.type, getCurrentTVShow)
}
