// Core
import { configureStore } from '@reduxjs/toolkit';

// Middleware
import { middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';

// Reducers
import general from '../../bus/general/slice';
import movies from '../../bus/movies/slice';
import tv from '../../bus/tv_shows/slice';

export const store = configureStore({
    reducer: {
        general,
        movies,
        tv
    },
    middleware
})

sagaMiddleware.run(rootSaga);
