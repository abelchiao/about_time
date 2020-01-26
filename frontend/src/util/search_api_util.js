import axios from 'axios';

export const createSearch = data => {
    return axios.post('/api/searches', data)
}

// subdoc - don't need this route - not tested
export const getSearch = id => {
    return axios.get(`/api/searches/${id}`)
}

export const getUserSearches = () => {
    return axios.get('/api/searches')
}

export const deleteSearch = searchId => {
    return axios.delete(`/api/searches`, { data: { searchId: searchId } })
}
