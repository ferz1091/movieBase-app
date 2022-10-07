// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchFetchMovies } from '../../bus/Saga/getMoviesWatcher';
import { getGenresWatcher } from '../../bus/Saga/getGenresWatcher';
import { getCurrentMovieWatcher } from '../../bus/Saga/getCurrentMovieWatcher';
import { getCurrentMovieReviewsByPageWatcher } from '../../bus/Saga/getCurrentMovieReviewsByPage';
import { getCurrentPersonWatcher } from '../../bus/Saga/getCurrentPersonWatcher';
import { getCurrentTVShowWatcher } from '../../bus/Saga/getCurrentTVShowWatcher';
import { getCurrentTVShowSeason } from '../../bus/Saga/getCurrentTVShowSeasonWatcher';
import { getCurrentTVShowReviewsByPageWatcher } from '../../bus/Saga/getCurrentTVShowReviewsByPage';

export function* rootSaga() {
    yield all([
                watchFetchMovies(), 
                getGenresWatcher(), 
                getCurrentMovieWatcher(), 
                getCurrentMovieReviewsByPageWatcher(),
                getCurrentPersonWatcher(),
                getCurrentTVShowWatcher(),
                getCurrentTVShowSeason(),
                getCurrentTVShowReviewsByPageWatcher()
            ]);
}
