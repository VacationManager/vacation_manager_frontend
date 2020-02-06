import produce from 'immer';
import { SET_DEPARTMENT, CREATED_DEPARTMENT } from './actions';
import { CREATED_USER } from '../user/actions';

export default (baseState = {}, action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case SET_DEPARTMENT:
            draftState.departments = action.value;
            break;
        case CREATED_DEPARTMENT:
           draftState.departments.push(action.value);
           break;
        case CREATED_USER:
            const findDepartment = draftState.departments.findIndex((d) => d.id === action.value.departmentId);
            if (findDepartment >= 0) {
                draftState.departments[findDepartment].users.push(action.value);
            }
            break;
        default:
            break;
    }
});
