// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import * as extraReducers from './extraReducers';

const generalSlice = createSlice({
    name: 'general',
    reducers,
    initialState: {
        lang: 'en',
        isFetching: {main: false, reviews: false, seasons: false, search: false},
        mode: false,
        genres: [],
        currentMovie: null,
        currentTVShow: null,
        currentPerson: null,
        currentCollection: null,
        searchResults: []
    },
    extraReducers: {
        ...extraReducers.getCurrentCollectionReducer, 
        ...extraReducers.getCurrentMovieReducer, 
        ...extraReducers.getCurrentPersonReducer,
        ...extraReducers.getCurrentMovieReviewsByPageReducer,
        ...extraReducers.getCurrentTVShowReducer,
        ...extraReducers.getCurrentTVShowSeasonReducer,
        ...extraReducers.getCurrentTVShowReviewsByPageReducer,
        ...extraReducers.getCurrentSearchResultByStringReducer
    }
});

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;
