// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
import { generalActions } from '../general/slice';
import { moviesActions } from './slice';

// Api
import { movieAPI } from '../../api';

// Tools
import { getGenres } from '../../tools';

// MOVIES
export const getMoviesThunk = createAsyncThunk('general/getMovies', async ({ category, page, lang, totalPages, isGenresLoaded }, { dispatch }) => {
    dispatch(generalActions.toggleIsFetchingMain(true));
    if (isGenresLoaded) {
        getGenres(lang)
            .then(genres => dispatch(generalActions.setGenres(genres)))
            .catch(error => dispatch(generalActions.setGenres({ error: error.message })))
    }
    try {
        const response = await movieAPI.getMovies(category, page, lang);
        if (!totalPages) {
            dispatch(moviesActions.setTotalPages({category, totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages}))
        }
        dispatch(moviesActions.setMovies({category, page, data: response.data.results, error: null}))
    } catch (error) {
        dispatch(moviesActions.setMovies({category, page, data: null, error: error.message}))
    }
    dispatch(generalActions.toggleIsFetchingMain(false));
})
