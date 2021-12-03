import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import star from '../../assets/star.svg';
import { MovieDetailLoader } from '../../components';
import NotFound from '../NotFound';
import { GET_MOVIE_DETAIL } from '../../config/redux/action/GetMovieDetail';
import './movieDetails.scss';

const MovieDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
  const { movie, loading, error } = useSelector(state=> state)

  useEffect(() => {
    dispatch(GET_MOVIE_DETAIL(id))
    document.title = `${movie.title} | MDB-Movie`
  }, [dispatch, id, movie.title]);

  return (
    <>
    {
      error ? <NotFound /> :
        <div className="movie-details flex-grow-1">
          {
            loading ? <MovieDetailLoader /> :
              <div className="main-detail container">
                <div className="movie-detail-top">
                  <div className="movie-image">
                    <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
                    <img className="background" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""/>
                  </div>
                  <div className="movie-overview">
                    <h1>{movie.title}</h1>
                    <div className="rating">
                      <img src={star} alt=""/>
                      <div className="score">
                        <p><span>{movie.vote_average}</span>/10</p>
                        <p className="total-score">{movie.vote_count} vote</p>
                      </div>
                    </div>
                    <h3>Release Date:</h3>
                    <p>{movie.release_date}</p>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
          }
        </div>
      }
    </>
  )
}

export default MovieDetails;