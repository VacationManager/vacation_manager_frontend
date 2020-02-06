import React from 'react';
import { Accordion } from 'chayns-components';

import './history.scss';
import { de } from 'date-fns/locale';
import { format, isSameDay } from 'date-fns';
import { parseISO } from 'date-fns/esm';

const History = ({
    vacations,
}) => {
    console.log(vacations);
    return (
        <Accordion
            head="Deine Anträge"
            className="history_accordion"
            dataGroup="1"
        >
            <div
                className="accordion__content"
            >
                <p>Hier findest Du alle Deine Urlaubsanträge.</p>
                {vacations && vacations.map((vaca) => {
                    const startDate = format(parseISO(vaca.startTime), 'dd. MMMM', { locale: de } );
                    
                    if (isSameDay(parseISO(vaca.startTime), parseISO(vaca.endTime))) {
                        return (
                            <div
                                className="wrapper"
                            >
                                <div>{startDate}</div>
                                {vaca.requestState === 0 ? 'Offen' : vaca.requestState === 1 ? 'Angenommen' : 'Abgelehnt'}
                            </div>
                        )
                    }

                    const endDate = format(parseISO(vaca.endTime), 'dd. MMMM. yyyy', { locale: de } );
                    return (
                        <div
                        className="wrapper"
                    >
                        <div>{startDate} - {endDate}</div>
                        {vaca.requestState === 0 ? 'Offen' : vaca.requestState === 1 ? 'Angenommen' : 'Abgelehnt'}
                    </div>
                    )
                })}
         </div>
        </Accordion>
    );
};

export default History;
