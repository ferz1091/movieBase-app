// Core
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const generalSlice = createSlice({
    name: 'general',
    reducers,
    initialState: {
        API_KEY: '637ad7490de0534dfddaf1e806797244'
    }
});

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;