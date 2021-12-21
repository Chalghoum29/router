import React from 'react'
// import { x } from '../hedi'
// import { useState } from 'react'
// import Descriptiontrailer from './Descriptiontrailer'
import StarRating from './StarRating'
// import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'


const MovieCard = ({movie}) => {
    console.log(movie)
    // const [descrip, setdescrip] = useState(descrip)
    return (
        <div className="movie_card">
          <h1 > {movie.Title} </h1>
          {/* <h1> {movie.Rating} </h1> */}
          <StarRating rating={movie.Rating}/>
           <img src={movie.Image} alt="" height="500px" width="400px" />
           <Link  to={`/trailer/${movie.id}`} >trailer</Link>
          </div>
    )
}

export default MovieCard
