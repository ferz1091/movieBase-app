// Core
import { all } from 'redux-saga/effects';

// Tools
import { getMoviesWatcher } from '../../bus/Saga/getMoviesWatcher';
import { getGenresWatcher } from '../../bus/Saga/getGenresWatcher';
import { getCurrentMovieWatcher } from '../../bus/Saga/getCurrentMovieWatcher';
import { getCurrentMovieReviewsByPageWatcher } from '../../bus/Saga/getCurrentMovieReviewsByPage';
import { getCurrentPersonWatcher } from '../../bus/Saga/getCurrentPersonWatcher';
import { getCurrentTVShowWatcher } from '../../bus/Saga/getCurrentTVShowWatcher';
import { getCurrentTVShowSeason } from '../../bus/Saga/getCurrentTVShowSeasonWatcher';
import { getCurrentTVShowReviewsByPageWatcher } from '../../bus/Saga/getCurrentTVShowReviewsByPage';
import { getTVShowsWatcher } from '../../bus/Saga/getTVShowsWatcher';
import { getCurrentCollectionWatcher } from '../../bus/Saga/getCurrentCollectionWatcher';

export function* rootSaga() {
    yield all([
                getMoviesWatcher(), 
                getGenresWatcher(), 
                getCurrentMovieWatcher(), 
                getCurrentMovieReviewsByPageWatcher(),
                getCurrentPersonWatcher(),
                getCurrentTVShowWatcher(),
                getCurrentTVShowSeason(),
                getCurrentTVShowReviewsByPageWatcher(),
                getTVShowsWatcher(),
                getCurrentCollectionWatcher()
            ]);
}
