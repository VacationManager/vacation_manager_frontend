import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';

import Headline from './headline/Headline';
import LoginContainer from './login/LoginContainer';

import './app.scss';
import UserViewContainer from './userView/UserViewContainer';
import AdminViewContainer from './adminView/AdminViewContainer';
import DepartmentAdministration from '../components/userView/departmentAdministration/DepartmentAdministration';

const App = ({
    user,
    getDepartment,
    logout,
}) => {
    useEffect(() => {
        getDepartment();
    }, []);

    return (
        <div
            className="main_wrapper"
        >
            <Headline loggedIn={user && user.accessToken} logout={logout} />

            {user.isAdmin
                && (
                    <AdminViewContainer />
                )}

            {user.isManager
                && (
                    <DepartmentAdministration />
                )
            }
            {user && user.accessToken
                ? (
                    <UserViewContainer />
                )
                : (
                    <LoginContainer />
                )}
        </div>
    );
};

export default hot(App);
