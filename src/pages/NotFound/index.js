import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - MDB-Movie'
  })

  return (
    <div className="not-found d-flex flex-grow-1 justify-content-center align-items-center text-center flex-column">
      <h1>404<br/><span>Not Found</span></h1>
      <Link to="/" className="not-found-link">Back to Home</Link>
    </div>
  )
}

export default NotFound;