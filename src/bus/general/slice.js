// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const generalSlice = createSlice({
    name: 'general',
    reducers,
    initialState: {
        lang: 'en',
        isFetching: {main: false, reviews: false, seasons: false},
        mode: false,
        genres: [],
        currentMovie: null,
        currentTVShow: null,
        currentPerson: null,
        currentCollection: null
    }
});

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;
