import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import SearchErrorsReducer from './search_errors_reducer';

export default combineReducers({
    search: SearchErrorsReducer,
    session: SessionErrorsReducer
});