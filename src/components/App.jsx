import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';

import Headline from './headline/Headline';
import LoginContainer from './login/LoginContainer';

import './app.scss';
import UserViewContainer from './userView/UserViewContainer';
import AdminViewContainer from './adminView/AdminViewContainer';
import DepartmentAdministration from './userView/departmentAdministration/DepartmentAdministration';
import RegisterContainer from './register/RegisterContainer';

const App = ({
    user,
    config,
    getConfig,
    getDepartment,
    logout,
    departments,
    getPendingVacations,
    pendingVacations,
    handleVacationRequestState,
}) => {
    useEffect(() => {
        if (user && user.accessToken) {
            getDepartment();
        } else {
            getConfig();
        }
    }, []);

    return (
        <div
            className="main_wrapper"
        >
            <Headline loggedIn={user && user.accessToken} logout={logout}/>

            {user.isAdmin
                && (
                    <AdminViewContainer/>
                )}

            {user.isManager
                && (
                    <DepartmentAdministration
                        manageDepartment={departments && departments.find((g) => g.id === user.departmentId)}
                        getPendingVacations={getPendingVacations}
                        pendingVacations={pendingVacations}
                        handleVacationRequestState={handleVacationRequestState}
                    />
                )}
            {

                (
                    config && (
                        // eslint-disable-next-line no-nested-ternary
                        user && user.accessToken
                            ? (
                                <UserViewContainer/>
                            )
                            : (
                                config.initialized ? <LoginContainer/> : <RegisterContainer/>
                            )
                    )
                )
            }
        </div>
    );
};

export default hot(App);
