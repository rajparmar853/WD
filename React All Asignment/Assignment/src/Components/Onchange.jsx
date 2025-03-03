import React, { useState } from 'react'

const Onchange = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <label htmlFor="#">The Name Is</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
        <label htmlFor="#">You Typed..{name}</label>
    </div>
  )
}

export default Onchange