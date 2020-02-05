import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import configureStore from './utils/store';

import App from './components/App';
import { setTodos } from './redux-modules/test/actions';

const store = configureStore();


const init = () => {
    const tappElement = document.querySelector('.tapp');
    store.dispatch(setTodos([]));
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        tappElement,
    );
};

init();
