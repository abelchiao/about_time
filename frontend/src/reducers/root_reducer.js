import { combineReducers } from 'redux';
import searches from './searches_reducer';
import session from './session_api_reducer';
import errors from './errors_reducer';
import watches from './watches_reducer';
import ui from './ui/ui_reducer'

const RootReducer = combineReducers({
    searches,
    session,
    errors,
    watches,
    ui
});

export default RootReducer;