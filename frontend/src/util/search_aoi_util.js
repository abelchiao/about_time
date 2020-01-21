import axios from 'axios';

export const createSearchParams = data => {
    return axios.post('/api/watches', data)
}

export const getSearch = data => {
    return axios.get('/api/watches', data)
}

export const getUserSearches = id => {
    return axios.get(`api/searches/user/${id}`)
}