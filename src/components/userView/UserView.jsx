import React from 'react';

import CreateVacationContainer from './createVacation/CreateVacationContainer';
import './userView.scss';
import HistoryContainer from './history/HistoryContainer';
import CalendarContainer from './calendar/CalendarContainer';

const UserView = () => {
    return (
        <div
            className="userview_wrapper"
        >
            <CreateVacationContainer/>

            <HistoryContainer/>

            <CalendarContainer/>
        </div>
    );
};

export default UserView;
