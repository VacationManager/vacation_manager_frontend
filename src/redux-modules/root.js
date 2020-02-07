import { combineReducers } from 'redux';

import config from './config/reducer';
import user from './user/reducer';
import department from './department/reducer';
import departmentManager from './departmentManager/reducer';

const rootReducer = combineReducers({
    config,
    user,
    department,
    departmentManager,
});

export default rootReducer;
