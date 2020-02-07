import produce from 'immer';
import { DEPARTMENT_MANAGER, SET_VACATION_REQUEST_STATE } from './actions';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case DEPARTMENT_MANAGER:
            draftState.departmentManager = action.value;
            break;
        case SET_VACATION_REQUEST_STATE:
            draftState.departmentManager = draftState.departmentManager.filter((vaca) => vaca.id !== action.value.requestId);
            break;
        default:
            break;
    }
});
