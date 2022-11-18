// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import * as extraReducers from './extraReducers';

const generalSlice = createSlice({
    name: 'general',
    reducers,
    initialState: {
        lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
        isFetching: {main: false, reviews: false, seasons: false, search: false, searchByParams: false},
        mode: false, // false - movies / true - tv shows on Main page
        styleMode: localStorage.getItem('styleMode') ? localStorage.getItem('styleMode') : '', // '' - light / '1' - dark Background style
        categoryValue: 'popular',
        genres: localStorage.getItem('genres') ? JSON.parse(localStorage.getItem('genres')) : [],
        currentMovie: null,
        currentTVShow: null,
        currentPerson: null,
        currentCollection: null,
        searchResults: [],
        compositionsByParams: {data: [], totalPages: null, params: {year: null, genre: null, mode: null}}
    },
    extraReducers: {
        ...extraReducers.getCurrentCollectionReducer, 
        ...extraReducers.getCurrentMovieReducer, 
        ...extraReducers.getCurrentPersonReducer,
        ...extraReducers.getCurrentMovieReviewsByPageReducer,
        ...extraReducers.getCurrentTVShowReducer,
        ...extraReducers.getCurrentTVShowSeasonReducer,
        ...extraReducers.getCurrentTVShowReviewsByPageReducer,
        ...extraReducers.getCurrentSearchResultByStringReducer,
        ...extraReducers.getMoviesByParamsReducer,
        ...extraReducers.getTVShowsByParamsReducer
    }
});

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;
