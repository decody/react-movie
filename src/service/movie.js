import axios from 'axios';

const endpoint = '/movies';

const getMovies = () => {
    return axios.get(endpoint);
};

const getMovieId = (movieId) => {
    return axios.get('/movies/' + movieId)
};

const addMovie = (data) => {
    return axios.post(endpoint, data);
};

const updateMovie = (movieId, data) => {
    return axios.put(endpoint + '/' + movieId, data);
};

const removeMovie = (movieId) => {
    return axios.delete(endpoint + '/' + movieId);
};

export {
    getMovies,
    getMovieId,
    addMovie,
    updateMovie,
    removeMovie,
};