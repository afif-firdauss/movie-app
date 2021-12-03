
import { GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAILURE } from "./types";
import { getMovieDetail } from '../../api';

export const getMovieDetailRequest = () => ({
    type: GET_MOVIE_DETAIL_REQUEST
})

export const getMovieDetailSuccess = (payload) => ({
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload
})

export const getMovieDetailFailure = (payload) => ({
    type: GET_MOVIE_DETAIL_FAILURE,
    payload
})

export const GET_MOVIE_DETAIL = (id) => async (dispatch) => {
    try {
        dispatch(getMovieDetailRequest())
        const data = await getMovieDetail(id)
        dispatch(getMovieDetailSuccess(data))
        return true
    } catch (err) {
        dispatch(getMovieDetailFailure(err))
        return false
    }
}