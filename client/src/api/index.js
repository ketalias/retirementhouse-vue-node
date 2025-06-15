import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/'

const api = axios.create({
    baseURL: API_BASE_URL,
})

export async function submitForm(data) {
    try {
        const response = await api.post('/api/form', data)
        return response.data
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(error.response.data.error)
        }
        throw error
    }
}
