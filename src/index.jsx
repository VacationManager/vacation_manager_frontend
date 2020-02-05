import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import configureStore from './utils/store';

import App from './components/App';
import { getUserData } from './redux-modules/user/actions';

const store = configureStore();


const init = () => {
    const tappElement = document.querySelector('.tapp');
    // store.dispatch(getUserData());
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        tappElement,
    );
};

init();
