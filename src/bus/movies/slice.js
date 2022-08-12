// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const moviesSlice = createSlice({
    name: 'movies',
    reducers,
    initialState: [
        { name: 'popular', data: []},
        { name: 'top', data: []},
        { name: 'upcoming', data: []},
        { name: 'nowPlaying', data: []}
    ]
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;