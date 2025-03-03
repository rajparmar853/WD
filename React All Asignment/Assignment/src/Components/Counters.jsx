import React, { useState } from 'react'

const Counters = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>The Count Is--{count}</h2>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Counters