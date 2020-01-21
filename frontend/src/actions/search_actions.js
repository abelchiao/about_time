import { getSearch } from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_NEW_SEARCH = "RECEIVE_NEW_SEARCH";
export const RECEIVE_USER_SEARCHES = "RECEIVE_USER_SEARCHES";

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

export const fetchUserSearches = (id) => dispatch => (
    getUserSearches(id)
        .then(searches => dispatch(receiveUserSearches(searches)))
        .catch(err => console.log(err))
);

export const fetchSearch = (data) => dispatch => (
    getSearch(data)
        .then(search => dispatch(receiveSearch(search)))
        .catch(err => console.log(err))
)

export const newSearch = (data) => dispatch => (
    newSearch(data)
        .then(search => dispatch(receiveNewSearch(search)))
        .catch(err => console.log(err))
);