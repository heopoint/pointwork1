import React, { useRef,useState,useEffect } from 'react'

function FileInput({ name, value, onChange }) {
  const inputRef = useRef()
  const [preview, setPreview] = useState()
  // -------------------------------------------------
  const handleChange = (e) => {
    console.log(e.target.value)
    const nextValue = e.target.files[0]
    onChange(name, nextValue)
  }
  // -------------------------------------------------
  const handleClearclick = () => {
    const inputNode = inputRef.current
    if (!inputNode) return

    inputNode.value = ''
    onChange(name, null)
  }
  useEffect(() => {
   if(!value) return;
   const nextPreview=URL.createObjectURL(value)
   setPreview(nextPreview)

    return () => {
      setPreview()
      URL.revokeObjectURL(nextPreview)
    };
  }, [value])
  return (
    <div>
      <img src={preview} alt='이미지'/>
      <input type='file' accept='image/png,image/jpeg'
      onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearclick}>❌</button>}
    </div>
  )
}

export default FileInput