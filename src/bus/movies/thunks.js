// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
import { generalActions } from '../general/slice';
import { moviesActions } from './slice';

// Api
import { movieAPI } from '../../api';

// MOVIES
export const getMoviesThunk = createAsyncThunk('general/getMovies', async ({ category, page, lang, totalPages, isGenresLoaded }, { dispatch }) => {
    dispatch(generalActions.toggleIsFetchingMain(true));
    if (isGenresLoaded) {
        try {
            const movieGenres = await movieAPI.getMovieGenres(lang);
            const tvGenres = await movieAPI.getTVGenres(lang);
            dispatch(generalActions.setGenres(movieGenres.data.genres.concat(tvGenres.data.genres)));
        } catch (error) {
            dispatch(generalActions.setGenres({ error: error.message }))
        }
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
