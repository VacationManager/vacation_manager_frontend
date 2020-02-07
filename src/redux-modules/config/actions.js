import {
    SERVER_URL,
} from '../../constants/server_url';
import { setUserData, getUserData } from '../user/actions';
import { getDepartment } from '../department/actions';

export const SET_CONFIG = 'SET_CONFIG';
const setConfig = (value) => ({
    type: SET_CONFIG,
    value,
});

export const getConfig = () => async (dispatch) => {
    const response = await fetch(`${SERVER_URL}setup/config`);

    if (response.status === 200) {
        const result = await response.json();
        dispatch(setConfig({
            initialized: true,
            config: result,
        }));
    } else {
        dispatch(setConfig({ initialized: false }));
    }
};

export const register = (data) => async (dispatch) => {
    const response = await fetch(`${SERVER_URL}setup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.status === 201) {
        const result = await response.json();
        dispatch(setUserData(result));
        dispatch(getDepartment());
        dispatch(getUserData(result.accessToken));
        dispatch(setConfig({ initialized: true }));
    }
};
