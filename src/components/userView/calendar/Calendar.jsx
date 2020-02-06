import React, { useState } from 'react';
import { Accordion } from 'chayns-components';
import './calendar.scss';
import { selectedPeriodDateHelper } from '../../../utils/dateHelper';
import { addDays, format } from 'date-fns';
import { de } from 'date-fns/locale';

const Calendar = () => {
    const [selectedPeriod, setSelectedPeriod] = useState(selectedPeriodDateHelper());
    const getDay = (dayIndex) => {
        switch (dayIndex) {
            case 0:
                return 'Mo.'
            case 1:
                return 'Di.'
            case 2:
                return 'Mi.'
            case 3:
                return 'Do.'
            case 4:
                return 'Fr.'
            case 5:
                return 'Sa.'
            case 6:
                return 'So.'
            default:
                break;
        }
    };

    return (
        <Accordion
            head="Kalender"
            defaultOpened
            dataGroup="1"
            className="calendar_accordion"
        >
            <div
                className="calendar"
            >
                <div
                    className="calendar_header"
                >
                    <div className="calendar__navigator no_select">
                        <div className="calendar__navigator_wrapper">
                            <i
                                className="fas fa-chevron-left calendar__navigator_icon"
                                onClick={() => {
                                    setSelectedPeriod(addDays(selectedPeriod, -7));
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <div
                                    style={{
                                        marginRight: '5px',
                                    }}
                                >
                                    {format(selectedPeriod, 'dd.MM', { locale: de })}</div>
                                <div
                                    style={{
                                        marginRight: '5px',
                                    }}
                                >-</div>
                                <div>{format(addDays(selectedPeriod, 7), 'dd.MM.yyyy', { locale: de })}</div>
                            </div>
                            <i
                                className="fas fa-chevron-right calendar__navigator_icon"
                                onClick={() => {
                                    setSelectedPeriod(addDays(selectedPeriod, 7))
                                }}
                            />
                        </div>
                        <div className="calendar__navigator_days">
                            <div className="calendar__navigator_days_table">
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        className="calendar__navigator_days_item"
                                        key={i}
                                    >
                                        {getDay(i)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="content"
                >

                </div>
            </div>
        </Accordion>
    );
};

export default Calendar;
