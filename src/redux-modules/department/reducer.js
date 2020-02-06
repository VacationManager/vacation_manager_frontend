import produce from 'immer';
import { SET_DEPARTMENT, CREATED_DEPARTMENT } from './actions';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_DEPARTMENT:
            draftState.departments = action.value;
            break;
        case CREATED_DEPARTMENT:
            draftState.departments = draftState.departments.push(action.value);
        default:
            break;
    }
});
