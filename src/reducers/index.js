import { combineReducers } from 'redux';

import clickRandomNameReducer from './clickRandomNameReducer';

export default combineReducers({
    clickRandomNameHandler: clickRandomNameReducer
});