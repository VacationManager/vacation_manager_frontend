import React, { useState } from 'react';
import { Accordion, Button, TextArea } from 'chayns-components';
import './createVacation.scss';
import { createVacationDateHelper } from '../../../utils/dateHelper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { de } from 'date-fns/locale';
import { addDays } from 'date-fns';
import { SERVER_URL } from '../../../constants/server_url';

const CreateVacation = ({
    user,
}) => {
    console.log(user);
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));
    const [annoation, setAnnotation] = useState('');


    const sendVacation = async () => {
        const response = await fetch(
            `${SERVER_URL}vacation`, {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${user.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    startTime: startDate,
                    endTime: endDate,
                }),
            });
        if (response.status === 200) {
            // const result = await response.json();
            // dispatch(setDepartment(result));
        }
    };

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
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={de}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="dd.MM.yy"
                    value={startDate}
                    onChange={(date) => {
                        if (date > endDate) {
                            setEndDate(date)
                        }
                        setStartDate(date);
                    }}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    minDate={new Date()}
                />
            </MuiPickersUtilsProvider>
                    <p
                        className="divider"
                    >
                        -
                    </p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={de}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    format="dd.MM.yy"
                    value={endDate}
                    onChange={setEndDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    minDate={startDate}
                />
            </MuiPickersUtilsProvider>
                </div>
            </div>

            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <TextArea
                    onChange={setAnnotation}
                    value={annoation}
                    placeholder="Anmerkungen"
                    className="annotation_textarea"
                />
            </div>
    
            <div
                className="button_wrapper"
            >
                <Button
                    onClick={sendVacation}
                >Abschicken</Button>
            </div>
        </Accordion>
    );
};

export default CreateVacation;
