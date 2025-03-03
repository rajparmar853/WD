import React, { useState } from 'react'

const Login_Logout = () => {
    const [name,setName] = useState("Logout")
  return (
    <div>
        <h3>The Form--{name}</h3>
        <button onClick={()=>setName("Login")}>{name}</button>
    </div>
  )
}

export default Login_Logout