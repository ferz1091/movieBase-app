// Core
import { configureStore } from '@reduxjs/toolkit';

// Middleware
import { middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';

// Reducers
import general from '../../bus/general/slice';

export const store = configureStore({
    reducer: {
        general
    },
    middleware
})

sagaMiddleware.run(rootSaga);