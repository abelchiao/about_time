import axios from 'axios';

export const createSearch = data => {
    return axios.post('/api/searches', data)
}

export const getSearch = id => {
    return axios.get(`/api/searches/${id}`)
}

export const getUserSearches = id => {
    return axios.get(`api/users/search/${id}`)
}