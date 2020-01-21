import { combineReducers } from 'redux';
import session from './session_api_reducer.js/index.js';
import errors from './errors_reducer';
import tweets from './tweets_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    tweets
});

export default RootReducer;