import { RECEIVE_SEARCH, RECEIVE_NEW_SEARCH, RECEIVE_USER_SEARCHES, REMOVE_SEARCH } from '../actions/search_actions';
import { RECEIVE_WATCHES } from '../actions/watch_actions';

// not currently using searches.user - currently set up to save all of a user's searches in searches.all
const searchesReducer = (state = { all: [], user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        // not used - not tested
        case RECEIVE_SEARCH:
            newState.all = action.search.data;
            return newState;
        case RECEIVE_NEW_SEARCH:
            newState.all.push(action.search.data);
            newState.new = undefined;
            return newState;
        case RECEIVE_USER_SEARCHES:
            newState.all = action.searches.data
            return newState;
        case RECEIVE_WATCHES:
            newState.new = action.query
            return newState;
        case REMOVE_SEARCH:
            let searches = newState.all.filter(search => {
                return search._id !== action.searchId
            })
            newState.all = searches;
            return newState;
        default:
            return state;
    }
};

export default searchesReducer;