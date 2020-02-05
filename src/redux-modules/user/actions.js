import { USER_DATA } from './types';

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
