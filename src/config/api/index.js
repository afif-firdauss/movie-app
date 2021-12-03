import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2fccde01a371b106b09a241d6d1d5b49';

export const getMovieGenre = async () => {
  const { data } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
  return data.genres;
}

export const getAllMovies = async (page) => {
  const { data } = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`)
  return data;
}

export const getMovieDetail = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
}