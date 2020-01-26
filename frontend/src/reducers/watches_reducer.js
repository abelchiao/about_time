import { RECEIVE_WATCH, RECEIVE_WATCHES } from '../actions/watch_actions';

const watchesReducer = (state = [], action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_WATCH:
            nextState = action.watch.data;
            return nextState;
        case RECEIVE_WATCHES:
            return action.watches.data;
        default:
            return state;
    }
}

export default watchesReducer;
