import React,{useState} from 'react'
import Rating from './Rating'
import './ratingInput.css'
function RatingInput({name,value,onChange}) {
  
  const [rating, setRating] = useState(value)
  const handleSelect = (nextValue) =>onChange(name,nextValue)
  const handleMouseOut = () =>  setRating(value)

  return (
    <div>
      <Rating className='ratingInput'
       value={rating} 
        onSelect={handleSelect}
        onHover={setRating}
        onMouseOut={handleMouseOut}
      />
    </div>
  )
}

export default RatingInput