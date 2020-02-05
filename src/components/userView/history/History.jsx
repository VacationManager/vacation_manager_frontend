import React from 'react';
import { Accordion } from 'chayns-components';

import './history.scss';

const History = () => {
    return (
        <Accordion
            head="Deine Anträge"
            className="history_accordion"
            dataGroup="1"
        >
            <p>Hier findest Du alle Deine Urlaubsanträge.</p>
        </Accordion>
    );
};

export default History;
