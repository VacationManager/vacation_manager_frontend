import { hot } from 'react-hot-loader/root';
import React from 'react';

import Headline from './headline/Headline';
import LoginContainer from './login/LoginContainer';

import './app.scss';
import UserViewContainer from './userView/UserViewContainer';
import AdminViewContainer from './adminView/AdminViewContainer';

const App = ({
    user,
}) => {
    console.log(user);
    
    return (
        <div
            className="main_wrapper"
        >
            <Headline/>

            {user.isAdmin
                && (
                    <AdminViewContainer/>
                )}

            {user && user.accessToken
                ? (
                    <UserViewContainer/>
                )
                : (
                    <LoginContainer/>
                )}

            {/* User logged in */}

            {/* Admin */}

            {/* User verwalten */}

            {/* Abteilung verwalten */}

            {/* !Admin */}

            {/* Antrag erstellen */}

            {/* History */}

            {/* Calender with other user */}

            {/* Manager? */}

            {/* offene Anträge */}

            {/* User not logged in */}
        </div>
    );
};

export default hot(App);
