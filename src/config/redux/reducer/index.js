import { 
  GET_MOVIE_GENRE_REQUEST,
  GET_MOVIE_GENRE_SUCCESS,
  GET_MOVIE_GENRE_FAILURE,
  SET_PAGE,
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
  GET_MOVIE_DETAIL_REQUEST,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE,
} from "../action/types";

const initialState = {
  loading: false,
  genre: [],
  page: 1,
  movies: [],
  movie: [],
  totalPage: null,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_GENRE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case GET_MOVIE_GENRE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        genre: payload,
      });
    case GET_MOVIE_GENRE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: payload
      });

    case SET_PAGE:
      return Object.assign({}, state, {
        page: payload
      });
    case GET_ALL_MOVIES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case GET_ALL_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        movies: payload.results,
        totalPage: payload.total_pages
      });
    case GET_ALL_MOVIES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: payload
      });

    case GET_MOVIE_DETAIL_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case GET_MOVIE_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        movie: payload,
      });
    case GET_MOVIE_DETAIL_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: payload
      });
    default:
      return state
  }
}

export default reducer;