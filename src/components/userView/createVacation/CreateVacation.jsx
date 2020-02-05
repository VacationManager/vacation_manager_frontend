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

const CreateVacation = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [annoation, setAnnotation] = useState('');


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
                <Button>Abschicken</Button>
            </div>
        </Accordion>
    );
};

export default CreateVacation;
