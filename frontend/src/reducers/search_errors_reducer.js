import {
    RECEIVE_SEARCH,
    RECEIVE_SEARCH_ERRORS
} from '../actions/search_actions';

const _nullErrors = [];

const searchErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH:
            return _nullErrors;
        case RECEIVE_SEARCH_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default searchErrorsReducer;