import React from 'react'
import './rating.css'

const RATINGS=[1,2,3,4,5]
// -------------------------------------
function Star({selected=false,
  rating,onSelect,onHover}) {
 
 const className=`ratingStar ${selected?'selected':''}`
 const handleClick = onSelect?() => onSelect(rating):undefined;
 const handleMouseOver = onHover ?()=>  onHover(rating):undefined

 return <span className={className} 
 onClick={handleClick}
 onMouseOver={handleMouseOver}
 >★</span>
}
// -------------------------------------
function Rating({className,value=0,onSelect,onHover,onMouseOut}) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating)=>(
         <Star selected={value>=rating}
         rating={rating}
         onSelect={onSelect}
         onHover={onHover}
         />
      ))}
    </div>
  )
}

export default Rating
// 클릭하면 별점값으로 실행하고
// 마우스를 올리면 미리보기
// 마우스가 나가면 클릭한 값으로 set