import axios from 'axios';

export const StarWarsApi = axios.create({
    baseURL: 'https://swapi.dev/api/people'
})