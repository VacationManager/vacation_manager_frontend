import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import configureStore from './utils/store';

import AppContainer from './components/AppContainer';
import { getUserData, setUserData } from './redux-modules/user/actions';

const store = configureStore();


const init = async () => {
    const tappElement = document.querySelector('.tapp');
    const userToken = document.cookie.replace(/^(.*)vacation_manager=([^;]+)(.*)$/, ((matchedString, match1, match2) => decodeURIComponent(match2)));

    if (userToken) {
        store.dispatch(setUserData({ accessToken: userToken }));
        store.dispatch(getUserData(userToken));
    }

    ReactDOM.render(
        <Provider store={store}>
            <AppContainer/>
        </Provider>,
        tappElement,
    );
};

init();
