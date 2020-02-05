import produce from 'immer';
import { TEST } from './types';

export default (baseState = [], action) => produce(baseState, (draftState) => {
    switch (action.type) {
        case TEST:
        default:
            break;
    }
});
