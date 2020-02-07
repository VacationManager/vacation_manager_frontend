import produce from 'immer';
import { USER_DATA, USER_TOKEN } from './types';
import { LOGOUT } from './actions';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case USER_DATA:
            Object.entries(action.value).forEach(([k, v]) => {
                draftState[k] = v;
            });
            break;
        case USER_TOKEN:
            draftState.token = action.value;
            break;
        case LOGOUT:
            Object.entries(draftState).forEach(([k, v]) => {
                draftState[k] = null;
            });
            break;
        default:
            break;
    }
});
