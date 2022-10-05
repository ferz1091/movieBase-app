// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

function* getSeason(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingSeasons.type,
        payload: true
    })
    try {
        const season = yield effects.call(() => movieAPI.getSeason(action.payload.id, action.payload.season, action.payload.lang))
        yield effects.put({
            type: generalActions.setSeason.type,
            payload: season.data
        })
    } catch (error) {
        yield effects.put({
            type: generalActions.setSeason.type,
            payload: {error: error.message, season_number: action.payload.season}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingSeasons.type,
        payload: false
    })
}

export function* getCurrentTVShowSeason() {
    yield effects.takeLatest(generalActions.getSeason.type, getSeason)
}
