import { combineReducers } from 'redux';
import search from './search_reducer';
import session from './session_api_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    search,
    session,
    errors
});

export default RootReducer;