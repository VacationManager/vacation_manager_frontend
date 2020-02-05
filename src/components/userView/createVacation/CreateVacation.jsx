import React, { useState } from 'react';
import { Accordion, Button } from 'chayns-components';

import './createVacation.scss';

const CreateVacation = () => {
    const [showSelectDate, setShowSelectDate] = useState(false);
    return (
        <Accordion
            head="Antrag erstellen"
            dataGroup="1"
        >
            <div
                className="select_time_wrapper"
            >
                <p
                    className="time_text"
                >
                        Zeitraum
                </p>
                <div
                    className="select_time"
                >
                    <Button
                        className="time_from"
                        onClick={() => {
                            setShowSelectDate(!showSelectDate);
                        }}
                    >
                            Test
                    </Button>
                    <p
                        className="divider"
                    >
                            -
                    </p>
                    <Button
                        onClick={() => {
                            setShowSelectDate(!showSelectDate);
                        }}
                    >
                            Test
                    </Button>
                </div>
            </div>
        </Accordion>
    );
};

export default CreateVacation;
