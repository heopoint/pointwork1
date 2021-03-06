import React,{useState} from 'react'
import {createReview} from '../fetch'
import FileInput from './FileInput'
import RatingInput from './RatingInput'

const INITIAL_VALUES={
title:'',
rating:0,
content:'',
imgFile:null
}
function ReviewForm() {
const [values, setValues] = useState(INITIAL_VALUES)

const handleChange = (name,value) => { 
  setValues((prevValues)=>({
    ...prevValues,[name]:value
  }))
 }
const handleInputChange = (e) => { 

  const {name,value}=e.target;
  handleChange(name,value)

 }


const handleSubmit = async(e) => { 
  e.preventDefault()
  const formData=new FormData()
  formData.append('title',values.title);
  formData.append('rating',values.rating);
  formData.append('content',values.content);
  formData.append('imgFile',values.imgFile);
  await createReview(formData)
  setValues(INITIAL_VALUES)
 }



  return (
    <form className='reviewForm' onSubmit={handleSubmit}>
    <FileInput name="imgFile"
    value={values.imgFile}
    onChange={handleChange}/>
    <input name='title' value={values.title}  onChange={handleInputChange}/>
    <RatingInput name="rating" value={values.rating} onChange={handleChange}/>
    <textarea name='content'  value={values.content} onChange={handleInputChange}/>
    <button type='submit'>확인</button>
  </form>
  )
}

export default ReviewForm