// Core
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// Reducers
import general from '../../bus/general/slice';
import movies from '../../bus/movies/slice';
import tv from '../../bus/tv_shows/slice';

const logger = process.env.NODE_ENV === 'development' ? createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#808080',
        prevState: () => '#0000FF',
        action: () => '#00FF00',
        nextState: () => '#800080',
        error: () => '#FF0000',
    },
}) : [];

export const store = configureStore({
    reducer: {
        general,
        movies,
        tv
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
