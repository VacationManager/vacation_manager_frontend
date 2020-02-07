import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../redux-modules/root';

export default () => {
    const middlewares = [thunk];

    middlewares.push(createLogger());

    return createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );
};
