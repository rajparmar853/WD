import React, { useState } from 'react'

const Button = () => {
    const[name, setName] = useState("Not Clicked")
  return (
    <div>
        <h2>The Button -- {name}</h2>
        <button onClick={()=>setName("Clicked")}>{name}</button>
    </div>
  )
}

export default Button