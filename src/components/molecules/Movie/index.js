import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_MOVIE, setPage } from '../../../config/redux/action/GetAllMovies';
import MovieLoader from '../MovieLoader';
import ReactPaginate from 'react-paginate';
import './movie.css';


const Movie = () => {
  const dispatch = useDispatch()
  const { movies, page, totalPage, loading } = useSelector(state=> state)

  const navigate = useNavigate();

  const handlePageChange = (e) => {
    let selected = e.selected + 1;
    dispatch(setPage(selected))
  }

  useEffect(() => {
    dispatch(GET_ALL_MOVIE(page));
  }, [page, dispatch]);

  return (
    <div className="movies">
      {
        loading ? <MovieLoader /> : 
          <div className="movie">
            {
              movies !== null && movies.map((movie, index) => {
                return (
                  <div key={index} className="movie-card" onClick={() => navigate(`/movie-details/${movie.id}`)}>
                    <img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png'} alt="movie poster" />
                    <p>{movie.title}</p>
                  </div>
                )
              })
            }
          </div>
      }
      <ReactPaginate
        previousLabel={page === 1 ? null : 'Previous'}
        nextLabel={page === totalPage ? null : 'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(totalPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={page - 1}
      />
    </div>
  )
}

export default Movie;
