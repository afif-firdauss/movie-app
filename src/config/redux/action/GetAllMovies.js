
import { SET_PAGE, GET_ALL_MOVIES_REQUEST, GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILURE } from "./types";
import { getAllMovies } from '../../api';

export const getAllMovieRequest = () => ({
    type: GET_ALL_MOVIES_REQUEST
})

export const getAllMovieSuccess = (payload) => ({
    type: GET_ALL_MOVIES_SUCCESS,
    payload
})

export const getAllMovieFailure = (payload) => ({
    type: GET_ALL_MOVIES_FAILURE,
    payload
})

export const GET_ALL_MOVIE = (page) => async (dispatch) => {
    try {
        dispatch(getAllMovieRequest())
        const data = await getAllMovies(page)
        dispatch(getAllMovieSuccess(data))
        return true
    } catch (err) {
        dispatch(getAllMovieFailure(err))
        return false
    }
}

export const setPage = (page) => {  
    return dispatch => {  
        return dispatch({  
            type: SET_PAGE,
            payload: page 
        });  
    }  
};  