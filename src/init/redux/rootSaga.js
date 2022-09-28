// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchFetchMovies } from '../../bus/Saga/getMoviesWatcher';
import { getGenresWatcher } from '../../bus/Saga/getGenresWatcher';
import { getCurrentMovieWatcher } from '../../bus/Saga/getCurrentMovieWatcher';
import { getCurrentMovieReviewsByPageWatcher } from '../../bus/Saga/getCurrentMovieReviewsByPage';

export function* rootSaga() {
    yield all([watchFetchMovies(), getGenresWatcher(), getCurrentMovieWatcher(), getCurrentMovieReviewsByPageWatcher()]);
}
