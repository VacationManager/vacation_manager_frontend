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
