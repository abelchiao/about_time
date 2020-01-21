import { RECEIVE_SEARCH, RECEIVE_NEW_SEARCH } from '../actions/search_actions';

const SearchReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SEARCH:
            newState.all = action.search.data;
            return newState;
        case RECEIVE_NEW_SEARCH:
            newState.new = action.search.data;
            return newState;
        default:
            return state;
    }
};

export default SearchReducer;