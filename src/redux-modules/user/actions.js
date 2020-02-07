import { USER_DATA, USER_TOKEN } from './types';
import { SERVER_URL } from '../../constants/server_url';
import { getUser } from './selectors';
import { getDepartment } from '../department/actions';

export const setUserData = (value) => ({
    type: USER_DATA,
    value,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
    type: LOGOUT,
});

export const getUserData = (userToken) => async (dispatch) => {
    const responseVacation = await fetch(`${SERVER_URL}vacation`, {
        headers: {
            Authorization: `bearer ${userToken}`,
        },
    });

    let vacations = null;
    if (responseVacation.status === 200) {
        const result = await responseVacation.json();
        vacations = result;
    }

    const response = await fetch(`${SERVER_URL}user`, {
        headers: {
            Authorization: `bearer ${userToken}`,
        },
    });

    if (response.status === 200) {
        const result = await response.json();

        dispatch(setUserData({ ...result, vacations }));
    }
};

export const sendLogin = (email, password) => async (dispatch) => {
    const response = await fetch(`${SERVER_URL}user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            emailAddress: email,
            password,
        }),
    });
    if (response.status === 200) {
        const result = await response.json();
        document.cookie = `vacation_manager=${result.accessToken}; expires=${result.expirationDate}`;
        dispatch(setUserData(result));
        dispatch(getDepartment());
        dispatch(getUserData(result.accessToken));
        return true;
    }
    return false;
};

export const CREATED_USER = 'CREATED_USER';

export const createUser = (value) => ({
    type: CREATED_USER,
    value,
});

export const fetchCreateUser = (value) => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;
    const response = await fetch(`${SERVER_URL}user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${userToken}`,
        },
        body: JSON.stringify(value),
    });
    if (response.status === 200) {
        const result = await response.json();
        dispatch(createUser({ ...value, id: result.createdUserId }));
        return true;
    }
    return false;
};
