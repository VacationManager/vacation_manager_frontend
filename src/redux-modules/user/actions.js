import { USER_DATA, USER_TOKEN } from './types';
import { SERVER_URL } from '../../constants/server_url';

export const setUserData = (value) => ({
    type: USER_DATA,
    value,
});

export const getUserData = (userToken) => async (dispatch) => {
    const response = await fetch(
        `${SERVER_URL}/user`, {
            headers: {
                'Authorization': `bearer ${userToken}`,
            }
        });
        
    if (response.status === 200) {
        const result = await response.json();
        
        dispatch(setUserData(result));
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
    }
};
