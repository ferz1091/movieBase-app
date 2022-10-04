// Core
import * as effects from 'redux-saga/effects';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';

// Tools
import { deleteDuplicates } from '../../tools';

function* getCurrentPerson(action) {
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: true
    });
    try {
        const response = yield effects.call(() => movieAPI.getCurrentPerson(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setCurrentPerson.type,
            payload: response.data
        })
        const personMovieCredits = yield effects.call(() => movieAPI.getPersonMovieCredits(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setPersonMovieCredits.type,
            payload: response.data.known_of_department === 'Acting' ? deleteDuplicates(personMovieCredits.data.cast.concat(personMovieCredits.data.crew)) : deleteDuplicates(personMovieCredits.data.crew.concat(personMovieCredits.data.cast))
        })
        const personTVCredits = yield effects.call(() => movieAPI.getPersonTVCredits(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setPersonTVCredits.type,
            payload: response.data.known_of_department === 'Acting' ? deleteDuplicates(personTVCredits.data.cast.concat(personTVCredits.data.crew)) : deleteDuplicates(personTVCredits.data.crew.concat(personTVCredits.data.cast))
        })
        const socialIds = yield effects.call(() => movieAPI.getPersonSocialIds(action.payload.id, action.payload.lang));
        yield effects.put({
            type: generalActions.setPersonSocialIds.type,
            payload: socialIds.data
        })
    } catch (error) {
        effects.put({
            type: generalActions.setCurrentPerson.type,
            payload: {error: error}
        })
    }
    yield effects.put({
        type: generalActions.toggleIsFetchingMain.type,
        payload: false
    });
}

export function* getCurrentPersonWatcher() {
    yield effects.takeLatest(generalActions.getCurrentPerson.type, getCurrentPerson)
}
