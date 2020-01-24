import axios from 'axios';
export const getWatch = (id) => {
    return axios.get(`/api/watches/${id}`)
}

export const getWatches = (search) => {
    return axios.post(`/api/watches/search`, search)
}

export const createWatch = (data) => {
    return axios.post('/api/watches', data)
}