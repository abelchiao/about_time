import { RECEIVE_WATCH, RECEIVE_WATCHES } from '../actions/watch_actions';

// we instantiate as an empty array because instantiating as an object
// causes problems when calling array functions on what is initially an empty
// object, even when it becomes an array after it is populated

const initialState = [];

const watchesReducer = (state = initialState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_WATCH:
            return action.watch.data;
        case RECEIVE_WATCHES:
            return action.watches.data;
        default:
            return state;
    }
}

export default watchesReducer;
