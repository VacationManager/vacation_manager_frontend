import { getHours, format, addDays, getDay, startOfWeek } from 'date-fns';
import { de } from 'date-fns/locale';

export const createVacationDateHelper = (isStartDate) => {
    let date = new Date();
    if (isStartDate) {
        const hours = getHours(date);
        if (hours < 12) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date = `${format(date, 'd. MMMM', { locale: de })} vorm.`;
        } else {
            date.setHours(12);
            date.setMinutes(0);
            date.setSeconds(0);
            date = `${format(date, 'd. MMMM', { locale: de })} nachm.`;
        }
    } else {
        date.setHours(12);
        date.setMinutes(0);
        date.setSeconds(0);
        date = `${format(date, 'd. MMMM', { locale: de })} nachm.`;
    }
    return date;
};

export const selectedPeriodDateHelper = () => startOfWeek(new Date());
