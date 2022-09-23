// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const moviesSlice = createSlice({
    name: 'movies',
    reducers,
    initialState: [
        { name: 'popular', data: [], totalPages: null},
        { name: 'top_rated', data: [], totalPages: null},
        { name: 'upcoming', data: [], totalPages: null},
        { name: 'now_playing', data: [], totalPages: null}
    ]
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;