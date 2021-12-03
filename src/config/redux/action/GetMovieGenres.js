
import { GET_MOVIE_GENRE_REQUEST, GET_MOVIE_GENRE_SUCCESS, GET_MOVIE_GENRE_FAILURE } from "./types";
import { getMovieGenre } from '../../api';

export const getMovieGenreRequest = () => ({
    type: GET_MOVIE_GENRE_REQUEST
})

export const getMovieGenreSuccess = (payload) => ({
    type: GET_MOVIE_GENRE_SUCCESS,
    payload
})

export const getMovieGenreFailure = (payload) => ({
    type: GET_MOVIE_GENRE_FAILURE,
    payload
})

export const GET_MOVIE_GENRE =  () => async (dispatch) => {
    try {
        dispatch(getMovieGenreRequest())
        const data = await getMovieGenre()
        dispatch(getMovieGenreSuccess(data))
        return true
    } catch (err) {
        dispatch(getMovieGenreFailure(err))
        return false
    }
}