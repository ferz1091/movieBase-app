// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchFetchMovies } from '../../bus/movies/saga';

export function* rootSaga() {
    yield all([watchFetchMovies()]);
}
