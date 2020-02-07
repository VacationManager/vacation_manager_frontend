import produce from 'immer';
import { DEPARTMENT_MANAGER } from './actions';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case DEPARTMENT_MANAGER:
            draftState.departmentManager = action.value;
            break;
        default:
            break;
    }
});
