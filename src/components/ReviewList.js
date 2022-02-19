import React from 'react'
import './reviewListItem.css'
import Rating from './Rating'

const formatDate = (value) => { 
  const date=new Date(value)
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
 }

function ReviewListItem({item,onDelete}) {
 const handleDeleteClick = () => {onDelete(item.id)}

   return (
    <div>
 
    <section className='reviewListItem'>
      <img src={item.imgUrl} className='reviewListItem-img' alt={item.title}/>
      <div>
        <h2>{item.title}</h2>
        <Rating value={item.rating}/>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </section>
    </div>
  )
}

// ----------------------------------
function ReviewList({items,onDelete}) {
  console.log(items)
  return (
    <ul>{
     items.map((item)=>( 
     <li key={item.id}><ReviewListItem item={item} onDelete={onDelete}/>
     
     </li>)) 
      }
    </ul>
  )
}

export default ReviewList