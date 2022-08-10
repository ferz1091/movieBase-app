// Core
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV === 'development';

const middleware = [sagaMiddleware];

isDev && middleware.push(
    createLogger({
        duration: true,
        collapsed: true,
        colors: {
            title: () => '#808080',
            prevState: () => '#0000FF',
            action: () => '#00FF00',
            nextState: () => '#800080',
            error: () => '#FF0000',
        },
    })
)

export { middleware, sagaMiddleware };