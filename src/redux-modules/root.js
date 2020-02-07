import { combineReducers } from 'redux';

import user from './user/reducer';
import department from './department/reducer';
import departmentManager from './departmentManager/reducer';

const rootReducer = combineReducers({
    user,
    department,
    departmentManager,
});

export default rootReducer;
