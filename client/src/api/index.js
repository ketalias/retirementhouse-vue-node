import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
})

export async function sendCalculatorForm(data) {
    try {
        const response = await api.post('/api/form/calculator', data)
        return response.data
    } catch (error) {
        throw handleApiError(error)
    }
}

export async function sendContactForm(data) {
    try {
        const response = await api.post('/api/form/contact', data)
        return response.data
    } catch (error) {
        throw handleApiError(error)
    }
}

function handleApiError(error) {
    if (error.response) {
        error.status = error.response.status;

        if (error.response.data && error.response.data.error) {
            const customError = new Error(error.response.data.error);
            customError.status = error.response.status; // <--- ОСНОВНИЙ ФІКС
            throw customError;
        }

        return error; 
    }

    throw error;
}
