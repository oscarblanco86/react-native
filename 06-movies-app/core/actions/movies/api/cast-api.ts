import axios from "axios";

export const castApi = axios.create({
    baseURL: process.env.EXPO_BASE_URL,
    params: {
        languag: 'es-MX',
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY
    }
})