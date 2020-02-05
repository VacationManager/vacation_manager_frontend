import produce from 'immer';
import { USER_DATA, USER_TOKEN } from './types';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case USER_DATA:
            draftState = action.value;
            break;
        case USER_TOKEN:
            draftState.token = action.value;
            break;
        default:
            break;
    }
});
