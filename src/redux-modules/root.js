import { combineReducers } from 'redux';

import user from './user/reducer';
import department from './department/reducer';

const rootReducer = combineReducers({
    user,
    department,
});

export default rootReducer;
