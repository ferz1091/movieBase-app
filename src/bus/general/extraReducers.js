// Thunks
import * as thunks from './thunks';

// CURRENT MOVIE
export const getCurrentMovieReducer = {
    [thunks.getCurrentMovieThunk.pending]: (state, action) => {
        state.isFetching.main = true;
    },
    [thunks.getCurrentMovieThunk.fulfilled]: (state, action) => {
        state.currentMovie = action.payload;
        state.isFetching.main = false;
    }
};

// CURRENT TV SHOW
export const getCurrentTVShowReducer = {
    [thunks.getCurrentTVShowThunk.pending]: (state, action) => {
        state.isFetching.main = true;
    },
    [thunks.getCurrentTVShowThunk.fulfilled]: (state, action) => {
        state.currentTVShow = action.payload;
        state.isFetching.main = false;
    }
}

// CURRENT TV SHOW SEASON
export const getCurrentTVShowSeasonReducer = {
    [thunks.getCurrentTVShowSeasonThunk.pending]: (state, action) => {
        state.isFetching.seasons = true;
    },
    [thunks.getCurrentTVShowSeasonThunk.fulfilled]: (state, action) => {
        state.currentTVShow.seasons = state.currentTVShow.seasons.map(season => {
            if (season.season_number === action.payload.season_number) {
                return {...season, ...action.payload, isLoaded: true}
            } else {
                return season
            }
        })
        state.isFetching.seasons = false;
    }
}

// CURRENT PERSON
export const getCurrentPersonReducer = {
    [thunks.getCurrentPersonThunk.pending]: (state, action) => {
        state.isFetching.main = true;
    },
    [thunks.getCurrentPersonThunk.fulfilled]: (state, action) => {
        state.currentPerson = action.payload;
        state.isFetching.main = false;
    }
}

// MOVIE REVIEWS BY PAGE
export const getCurrentMovieReviewsByPageReducer = {
    [thunks.getCurrentMovieReviewsByPageThunk.pending]: (state, action) => {
        state.isFetching.reviews = true;
    },
    [thunks.getCurrentMovieReviewsByPageThunk.fulfilled]: (state, action) => {
        state.currentMovie = {
                                ...state.currentMovie, 
                                reviews: {
                                            ...state.currentMovie.reviews, 
                                            data: [...state.currentMovie.reviews.data, {page: action.payload.page, data: action.payload.data}]
                                }
        };
        action.payload.func(action.payload.arg);
        state.isFetching.reviews = false;
    },
    [thunks.getCurrentMovieReviewsByPageThunk.rejected]: (state, action) => {
        state.currentMovie = {
            ...state.currentMovie,
            reviews: {
                ...state.currentMovie.reviews,
                data: [...state.currentMovie.reviews.data, {page: action.meta.arg.page, data: action.error.message}]
            }
        }
    }
}

// TV SHOW REVIEWS BY PAGE
export const getCurrentTVShowReviewsByPageReducer = {
    [thunks.getCurrentTVShowReviewsByPageThunk.pending]: (state, action) => {
        state.isFetching.reviews = true;
    },
    [thunks.getCurrentTVShowReviewsByPageThunk.fulfilled]: (state, action) => {
        state.currentTVShow = {
            ...state.currentTVShow,
            reviews: {
                ...state.currentTVShow.reviews,
                data: [...state.currentTVShow.reviews.data, { page: action.payload.page, data: action.payload.data }]
            }
        };
        action.payload.func(action.payload.arg);
        state.isFetching.reviews = false;
    },
    [thunks.getCurrentTVShowReviewsByPageThunk.rejected]: (state, action) => {
        state.currentTVShow = {
            ...state.currentTVShow,
            reviews: {
                ...state.currentTVShow.reviews,
                data: [...state.currentTVShow.reviews.data, { page: action.meta.arg.page, data: action.error.message }]
            }
        }
    }
}

// CURRENT COLLECTION
export const getCurrentCollectionReducer = {
    [thunks.getCurrentCollectionThunk.pending]: (state, action) => {
        state.isFetching.main = true;
    },
    [thunks.getCurrentCollectionThunk.fulfilled]: (state, action) => {
        state.currentCollection = action.payload;
        state.isFetching.main = false;
    },
    [thunks.getCurrentCollectionThunk.rejected]: (state, action) => {
        state.currentCollection = {error: action.error.message};
    }
};
