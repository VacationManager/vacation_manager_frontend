import { USER_DATA, USER_TOKEN } from './types';

export const setUserData = (values) => ({
    type: USER_DATA,
    values,
});

export const getUserData = () => async (dispatch) => {
    const response = await fetch();
    if (response.status === 200) {
        const result = await response.json();
        dispatch(setUserData(result));
    }
};

export const setUserToken = (value) => ({
    type: USER_TOKEN,
    value,
});

export const sendLogin = (email, password) => async (dispatch) => {
    document.cookie = `vacation_manager=test; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
    dispatch(setUserToken('test'));
    // const response = await fetch('url', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email,
    //         password,
    //     }),
    // });
    // if (response.status === 200) {
    //     const result = await response.json();
    //     document.cookie = `vacation_manager=${result.token}; expires=${result.expirationDate}`;
    //     dispatch(setUserToken(result.token));
    // }
};
