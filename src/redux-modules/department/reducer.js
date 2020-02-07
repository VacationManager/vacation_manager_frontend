import produce from 'immer';
import { SET_DEPARTMENT, CREATED_DEPARTMENT, DELETE_USER, UPDATE_USER } from './actions';
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
        case DELETE_USER:
            draftState.departments.map((d) => {
                if (d.users && d.users.length > 0) {
                    d.users = d.users.filter((user) => user.id !== action.value);
                }
                return d;
            });
            break;
        case UPDATE_USER:
            console.log(action.value);
            draftState.departments.map((d) => {
                const updatedUserIndex = d.users && d.users.findIndex((user) => user.id === action.value.id);
                if (updatedUserIndex >= 0) {
                    if (typeof action.value.isAdmin === 'boolean') {
                        d.users[updatedUserIndex].isAdmin = action.value.isAdmin;
                    }
                    if (typeof action.value.isManager === 'boolean') {
                        d.users[updatedUserIndex].isManager = action.value.isManager;
                    }
                }
                return d;
            });
            break;
        default:
            break;
    }
});
