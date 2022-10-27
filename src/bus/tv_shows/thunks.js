// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api
import { movieAPI } from '../../api';

// Actions
import { generalActions } from '../general/slice';
import { tvActions } from './slice';

// TV_SHOWS
export const getTVShowsThunk = createAsyncThunk('general/getTVShows', async ({ category, page, lang, totalPages }, { dispatch }) => {
    dispatch(generalActions.toggleIsFetchingMain(true));
    try {
        const response = await movieAPI.getTVShows(category, page, lang);
        dispatch(tvActions.setTVShows({ category, page, data: response.data.results, error: null }));
        if (!totalPages) {
            dispatch(tvActions.setTotalPages({ category, totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages }));
        }
    } catch (error) {
        dispatch(tvActions.setTVShows({ category, page, data: null, error: error.message }));
    }
    dispatch(generalActions.toggleIsFetchingMain(false));
})
