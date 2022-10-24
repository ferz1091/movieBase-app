// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const tvSlice = createSlice({
    name: 'tv',
    reducers,
    initialState: [
        { name: 'popular', data: [], totalPages: null },
        { name: 'top_rated', data: [], totalPages: null }
    ]
});

export const tvActions = tvSlice.actions;
export default tvSlice.reducer;
