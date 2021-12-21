// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = ({Film}) => {

    return (
        <div className="movie_list">
            <Link to="/movieadd">Addmovie</Link>
           { Film.map((el,i)=> <MovieCard key={i} movie={el} />)}
            
        </div>
    )
}

export default MovieList
