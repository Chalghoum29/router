import React from 'react'
import StarRating from './StarRating'

const Filter = ({text,handleText,rating,handleRating}) => {
    return (
        
  <div className='header-container'>
         <h1>Our movie App</h1>
  <div className='search-container'> 
    <input className='inp' type="text" value={text} onChange={handleText} />
    <StarRating rating={rating}/>
    </div>
            
        </div>
    )
}

export default Filter
