import { STUDENT_NAME } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.student_name, action) {
    if (action.type == STUDENT_NAME) {
        return {
            ...state,
            student_names_list: [...state.student_names_list],
        };
    } else {
        return state;
    }
}
