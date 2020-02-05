import React from 'react';

import CreateVacation from './createVacation/CreateVacation';
import './userView.scss';

const UserView = () => {
    return (
        <div
            className="userview_wrapper"
        >
            <CreateVacation/>

            <History />
        </div>
    );
};

export default UserView;
