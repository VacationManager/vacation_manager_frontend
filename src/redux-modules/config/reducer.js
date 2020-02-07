import { SET_CONFIG } from './actions';

export default (state = null, action) => {
    switch (action.type) {
        case SET_CONFIG:
            return action.value;
        default:
            return state;
    }
};
