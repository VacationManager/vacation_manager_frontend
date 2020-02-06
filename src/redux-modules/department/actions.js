import { SERVER_URL } from '../../constants/server_url';
import { getUser } from "../user/selectors";

export const SET_DEPARTMENT = 'SET_DEPARTMENT';

export const setDepartment = (value) => ({
    type: SET_DEPARTMENT,
    value,
});

export const getDepartment = () => async (dispatch, getState) => {
    const userToken = getUser(getState()).accessToken;
    
    const response = await fetch(
        `${SERVER_URL}/department`, {
            headers: {
                'Authorization': `bearer ${userToken}`,
            }
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
    
    const response = await fetch(
        `${SERVER_URL}/department`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${userToken}`,
            },
            body: JSON.stringify({
                departmentName: name,
            }),
        });
        
    if (response.status === 200) {
        const result = await response.json();
        dispatch(addDepartment(result));
    }
};
