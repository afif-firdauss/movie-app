import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_MOVIE_GENRE } from '../../../config/redux/action/GetMovieGenres';
import './filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const { genre } = useSelector(state=> state)

  useEffect(() => { 
    dispatch(GET_MOVIE_GENRE())
  }, [dispatch]);

  return (
    <div className="filter">
      <h2>All Genres</h2>
      <div className="filter-wrapper">
        {
          genre !== null && genre.map((item, index) => {
            return <span key={index} className="filter-item">{item.name}</span>
          })
        }
      </div>
    </div>
  )
}

export default Filter;