import {
    SERVER_URL,
} from '../../constants/server_url';
import {
    getUser,
} from '../user/selectors';

export const SET_DEPARTMENT = 'SET_DEPARTMENT';

export const setDepartment = (value) => ({
    type: SET_DEPARTMENT,
    value,
});

export const getDepartment = () => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}department`, {
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        const result = await response.json();
        dispatch(setDepartment(result));
    }
};

export const CREATED_DEPARTMENT = 'CREATED_DEPARTMENT';

export const addDepartment = (value) => ({
    type: CREATED_DEPARTMENT,
    value,
});

export const createDepartment = (name) => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}department`, {
        method: 'POST',
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            departmentName: name,
        }),
    });

    if (response.status === 200) {
        const result = await response.json();
        dispatch(addDepartment({
            ...result,
            departmentName: name,
        }));
    }
};

export const DELETE_USER = 'DELETE_USER';

export const deletedUser = (value) => ({
    type: DELETE_USER,
    value,
});

export const deleteUser = (id) => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}user?id=${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 204) {
        dispatch(deletedUser(id));
    }
};

export const UPDATE_USER = 'UPDATE_USER';

export const updatedUser = (value) => ({
    type: UPDATE_USER,
    value,
});

export const updateUser = (value) => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;

    const response = await fetch(`${SERVER_URL}user`, {
        method: 'PATCH',
        headers: {
            Authorization: `bearer ${userToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    });

    if (response.status === 204) {
        dispatch(updatedUser(value));
    }
};
