import axios from 'axios';

const FILMS_URLS = {
    GET_ALL: ` https://ghibliapi.herokuapp.com/films`,
    EDIT:(id)=> ` https://ghibliapi.herokuapp.com/films/${id}`,
    CREATE: ` https://ghibliapi.herokuapp.com/films`,
}

export const getAllFilms = async() => {
    const response = await axios.get(FILMS_URLS.GET_ALL);
    return response.data;
}

export const editFilm = async(id, values) => {
    try {
        const response = await axios.put(FILMS_URLS.EDIT(id), values);
        return response.data
    } catch (error) {
        throw new Error(error.response.data)
    }
}

export const createFilm = async(values) => {
    try {
        const response = await axios.post(FILMS_URLS.CREATE, values);
        return response.data
    } catch (error) {
        throw new Error(error.response.data)
    }
}