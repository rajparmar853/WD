import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>The Count is -- {count}</h2>
            <button onClick={()=> count<=0? count<0 : setCount(count - 1)}>Minus</button>
            <button onClick={()=>setCount(count + 1)}>Add</button>
        </div>
  )
}

export default Counter