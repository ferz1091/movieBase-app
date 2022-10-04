// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const generalSlice = createSlice({
    name: 'general',
    reducers,
    initialState: {
        lang: 'en',
        isFetching: {main: false, reviews: false},
        mode: 'popular',
        genres: [],
        currentMovie: null,
        currentPerson: null
    }
});

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;