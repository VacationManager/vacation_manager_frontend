import React, { useState } from 'react';
import { Accordion, Button, TextArea } from 'chayns-components';
import Test from '../Test';
import './createVacation.scss';
import { createVacationDateHelper } from '../../../utils/dateHelper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const CreateVacation = () => {
    // const [startDate, setStartDate] = useState(createVacationDateHelper(true));
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [endDate, setEndDate] = useState(createVacationDateHelper(false));
    const [annoation, setAnnotation] = useState('');

    const handleDateChange = date => {
        setSelectedDate(date);
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
                    {/* <Button
                        className="time_from"
                        onClick={() => {}}
                    >
                        {startDate}
                    </Button> */}
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </MuiPickersUtilsProvider>
                    <p
                        className="divider"
                    >
                        -
                    </p>
                    <Button
                        onClick={() => {}}
                    >
                        {endDate}
                    </Button>
                </div>
            </div>

            <TextArea
                onChange={setAnnotation}
                value={annoation}
                placeholder="Anmerkungen"
                className="annotation_textarea"
            />
    
            <div
                className="button_wrapper"
            >
                <Button>Abschicken</Button>
            </div>
        </Accordion>
    );
};

export default CreateVacation;
