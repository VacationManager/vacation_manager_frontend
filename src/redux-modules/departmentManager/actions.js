import {
    getUser,
} from '../user/selectors';
import {
    SERVER_URL,
} from '../../constants/server_url';

export const DEPARTMENT_MANAGER = 'DEPARTMENT_MANAGER';

export const setDepartmentManager = (value) => ({
    type: DEPARTMENT_MANAGER,
    value,
});

export const getPendingVacations = () => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}vacation/pending`, {
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        const result = await response.json();
        dispatch(setDepartmentManager(result));
    }
};

export const SET_VACATION_REQUEST_STATE = 'SET_VACATION_REQUEST_STATE';

export const setVacationRequestState = (value) => ({
    type: SET_VACATION_REQUEST_STATE,
    value,
});

export const handleVacationRequest = (value) => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}vacation`, {
        method: 'PATCH',
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value)
    });
    
    if (response.status === 200) {
        dispatch(setVacationRequestState(value));
        return true;
    }
    return false;
};