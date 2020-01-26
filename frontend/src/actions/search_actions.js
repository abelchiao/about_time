import * as SearchApiUtil from '../util/search_api_util';


export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_NEW_SEARCH = "RECEIVE_NEW_SEARCH";
export const RECEIVE_USER_SEARCHES = "RECEIVE_USER_SEARCHES";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const REMOVE_SEARCH = "REMOVE_SEARCH";

export const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
});

export const receiveNewSearch = (search) => ({
    type: RECEIVE_NEW_SEARCH,
    search
});

export const receiveUserSearches = (searches) => ({
    type: RECEIVE_USER_SEARCHES,
    searches
});

export const receiveErrors = errors => ({
    type: RECEIVE_SEARCH_ERRORS,
    errors
});

const removeSearch = searchId => ({
    type: REMOVE_SEARCH,
    searchId
});

export const fetchUserSearches = () => dispatch => (
    SearchApiUtil.getUserSearches()
        .then(searches => dispatch(receiveUserSearches(searches)))
        .catch(err => console.log(err))
);

// subdoc - don't need this action - not tested
export const fetchSearch = (data) => dispatch => (
    SearchApiUtil.getSearch(data)
        .then(search => dispatch(receiveSearch(search)))
        .catch(err => console.log(err))
);

export const newSearch = (data) => dispatch => (
    SearchApiUtil.createSearch(data)
        .then(search => dispatch(receiveNewSearch(search)))
        .catch(err => console.log(err))
);

export const deleteSearch = searchId => dispatch => (
    SearchApiUtil.deleteSearch(searchId)
        .then(() => dispatch(removeSearch(searchId)))
        .catch(err => console.log(err))
);