import React from 'react';
import { Accordion } from 'chayns-components';
import './calendar.scss';

const Calendar = () => {
    return (
        <Accordion
            head="Kalender"
            defaultOpened
            dataGroup="1"
            className="calendar_accordion"
        >
            <></>
        </Accordion>
    );
};

export default Calendar;
