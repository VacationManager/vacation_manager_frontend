import React, { useState, useRef } from 'react';
import { Accordion } from 'chayns-components';
import './calendar.scss';
import { addDays, format, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';
import { selectedPeriodDateHelper } from '../../../utils/dateHelper';

const Calendar = ({
    departments,
}) => {
    const [selectedPeriod, setSelectedPeriod] = useState(selectedPeriodDateHelper());
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', ({ target }) => {
        setWidth(target.innerWidth);
    });

    const getDay = (dayIndex) => {
        switch (dayIndex) {
            case 0:
                return 'Mo.';
            case 1:
                return 'Di.';
            case 2:
                return 'Mi.';
            case 3:
                return 'Do.';
            case 4:
                return 'Fr.';
            case 5:
                return 'Sa.';
            case 6:
                return 'So.';
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
                            <div
                                onClick={() => {
                                    setSelectedPeriod(addDays(selectedPeriod, -7));
                                }}
                            >
                                <i
                                    className="fas fa-chevron-left calendar__navigator_icon"
                                />
                            </div>
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
                                    {format(selectedPeriod, 'dd.MM', { locale: de })}
                                </div>
                                <div
                                    style={{
                                        marginRight: '5px',
                                    }}
                                >
-
                                </div>
                                <div>{format(addDays(selectedPeriod, 6), 'dd.MM.yyyy', { locale: de })}</div>
                            </div>
                            <div
                                onClick={() => {
                                    setSelectedPeriod(addDays(selectedPeriod, 7));
                                }}
                            >
                                <i
                                    className="fas fa-chevron-right calendar__navigator_icon"
                                />
                            </div>
                        </div>
                        <div
                            className="calendar__navigator_days"
                        >
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

                    {departments && departments.length > 0
                    && (
                        <div
                            className="user_wrapper"
                        >
                            {departments.map((d) => (
                                <div
                                    key={d.id}
                                >
                                    {d && d.users && d.users.map((user) => (
                                        <div
                                            key={user.id}
                                            className="calendar__navigator no_select"
                                            style={{
                                                alignItems: 'center',
                                            }}
                                            key={user.id}
                                        >
                                            <div
                                                style={{
                                                    width: '211px',
                                                    fontSize: '1.2em',
                                                }}
                                            >
                                                {`${user.firstName} ${user.lastName}`}
                                            </div>
                                            <div
                                                className="calendar__navigator_days"
                                                style={{
                                                    marginRight: width / 27,
                                                    height: 'unset',
                                                }}
                                            >
                                                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                                                    const userVacations = user.confirmedVacationSlots;
                                                    const currentDay = addDays(selectedPeriod, i);
                                                    const weekDay = currentDay.getDay();
                                                    const weekend = weekDay === 5 || weekDay === 6;

                                                    const findDay = userVacations && userVacations.find((g) => isSameDay(new Date(g.date), currentDay));

                                                    let color = '#00000000';
                                                    if (weekend) {
                                                        color = '#ffffff55';
                                                    } else if (findDay) {
                                                        color = '#00ff0077';
                                                    }

                                                    return (
                                                        <div
                                                            key={i}
                                                            className="calendar__navigator_days_item"
                                                        >
                                                            <svg width="40" height="40">
                                                                <rect width="40" height="40" fill={color}/>
                                                            </svg>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </Accordion>
    );
};

export default Calendar;
