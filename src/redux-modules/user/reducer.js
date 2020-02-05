import produce from 'immer';
import { USER_DATA } from './types';

export default (baseState = null, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case USER_DATA:
            draftState = action.value;
            break;
        default:
            break;
    }
});
