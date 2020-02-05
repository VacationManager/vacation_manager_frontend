import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import configureStore from './utils/store';

import AppContainer from './components/AppContainer';
import { getUserData, setUserToken } from './redux-modules/user/actions';

const store = configureStore();


const init = async () => {
    const tappElement = document.querySelector('.tapp');
    const userToken = document.cookie.replace(/^(.*)vacation_manager=([^;]+)(.*)$/, ((matchedString, match1, match2) => decodeURIComponent(match2)));

    console.log(userToken);
    if (userToken) {
        store.dispatch(setUserToken(userToken));
        // store.dispatch(getUserData());
    }

    ReactDOM.render(
        <Provider store={store}>
            <AppContainer/>
        </Provider>,
        tappElement,
    );
};

init();
