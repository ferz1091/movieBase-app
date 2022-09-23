// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchFetchMovies } from '../../bus/Saga/getMoviesWatcher';
import { getGenresWatcher } from '../../bus/Saga/getGenresWatcher';
import { getCurrentMovieWatcher } from '../../bus/Saga/getCurrentMovieWatcher';

export function* rootSaga() {
    yield all([watchFetchMovies(), getGenresWatcher(), getCurrentMovieWatcher()]);
}
