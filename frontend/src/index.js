import React from 'react';
import ReactDOM from 'react-dom';

import jwt_decode from 'jwt-decode';

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// import watch utils for testing
// import { getWatch, getWatches, createWatch } from './util/watch_api_util';

// import watch thunk action creators for testing
import { createWatch, fetchWatch, fetchWatches } from './actions/watch_actions';

// import search utils for testing
// import { 
//     createSearch, 
//     getUserSearches, 
//     deleteSearch 
// } from './util/search_api_util';

// import search thunk action creators for testing
import { fetchUserSearches, newSearch, deleteSearch } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        
        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }


    // set watch utils to window for testing
    // window.getWatch = getWatch
    // window.getWatches = getWatches
    // window.createWatch = createWatch

    // set search utils to window for testing
    // window.createSearch = createSearch
    // window.getUserSearches = getUserSearches
    // window.deleteSearch = deleteSearch

    window.dispatch = store.dispatch;
    window.getState = store.getState;

    // set watch thunk actions to window to test - need to dispatch
    // window.createWatch = createWatch
    // window.fetchWatch = fetchWatch
    window.fetchWatches = fetchWatches

    // set search thunk actions to window to test
    window.fetchUserSearches = fetchUserSearches
    window.newSearch = newSearch
    window.deleteSearch = deleteSearch

    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
})