import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c328aa23e50f0b329c04f8dd38720ce7',
        language: 'es-ES'
    }
})

export default movieDB;