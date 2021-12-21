import React from 'react'
import { Link } from 'react-router-dom'

const Descriptiontrailer = (props) => {
    console.log(props)
    const film = props.movies.find(el=>el.id==props.match.params.id)
    console.log(film)
    return (
        <div>
            <Link to="/">home</Link>
            <h1>{film.Description}</h1>
            <iframe width="560" height="315" src={film.Trailer} title='YouTube video player' 
            frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media ;
            gyroscope; picture-in-picture' allowFullScreen  ></iframe>
           
            
        </div>
    )
}

export default Descriptiontrailer
