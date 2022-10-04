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
    } catch (error) {
        yield effects.put({
            type: generalActions.setCurrentTVShow.type,
            payload: {error: error.message}
        })
    }
}

export function* getCurrentTVShowWatcher() {
    yield effects.takeLatest(generalActions.getCurrentTVShow.type, getCurrentTVShow)
}
