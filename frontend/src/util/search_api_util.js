import axios from 'axios';

export const createSearch = data => {
    return axios.post('/api/searches', data)
}

export const getSearch = data => {
    return axios.get(`/api/searches/${id}`, data)
}

export const getUserSearches = id => {
    return axios.get(`api/users/search/${id}`)
}