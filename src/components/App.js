import React,{useState,useEffect} from 'react'
import ReviewList from './ReviewList'
import {getReviews} from '../fetch'
import ReviewForm from './ReviewForm'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState('createdAt')

  const sortedItems=items.sort((a,b)=>b[order]-a[order])

  const handleNewClick = () =>setOrder('createdAt')
  const handleBestClick = () =>setOrder('rating')

const handleDelete = (id) => { 
  // filter 실행 해서 return 값이 true 가 아닌값을 걸러낸다
  const nextItems=items.filter((item)=>item.id !==id)
  setItems(nextItems)
 }

const handleLoad = async(orderQuery) => { 
  const reviews =await getReviews(orderQuery)
  setItems(reviews)
 }

useEffect(() => {
  handleLoad(order)
},[order])

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
       <ReviewForm/>
      <ReviewList items={sortedItems} onDelete={handleDelete}/>
    </div>
  )
}

export default App