import React, { useState,useRef } from 'react'

const Useref = () => {
    const  [count, setCounter] = useState(0)
    const render =useRef(0)
    render.current +=1;
  return (
    <div>
        <h2>The Count is -- {count}</h2>
        <h3>{render.current}</h3>
        <button onClick={()=>{setCounter(count+1)}}>Add</button>
    </div>
  )
}

export default Useref